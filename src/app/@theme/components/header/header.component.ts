import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
test:string = "";
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];


  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private authService: NbAuthService,
              //private layoutService: LayoutService,
              private cdr: ChangeDetectorRef,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {

    this.authService.getToken().subscribe(token => {
      const payload = token.getPayload();
      console.log('payload:', payload);
    
      this.user = {
        name: payload["name"], // ou l'URI claim selon ton token
        email: payload["email"],
        picture: 'assets/logo.PNG' // temporaire si t'as pas de photo
      };
      this.test=this.user.name;
      console.log("✅ User ready", this.user);
      console.log("✅ User test", this.test);
      this.cdr.detectChanges();
    });







    this.currentTheme = this.themeService.currentTheme;

    this.authService.getToken().subscribe(x=>{
      const payload = x.getPayload();
    // console.log("Claims du token :", JSON.stringify(payload, null, 2));
    // console.log("paylod :",payload);
      
     // this.user = {name: payload.name, email: payload.email}
    });
    // console.log("yves ramarojaona usersssss ",this.user);





    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
  //  this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
