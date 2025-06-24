import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthJWTToken, NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UserData } from './data/users';
import { UserService } from './mock/users.service';
import { AuthComponent } from './module/auth/auth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { environment } from '../environments/environment.prod';
import { AnalyticsService } from './utils/analytics.service';
import { AuthModule } from "./module/auth/auth.module";
import { ApiService } from './services/api.service';


const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  
];
const HTTP_INTERCEPTOR: any[] = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
]
export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ApiService,
  ...DATA_SERVICES,
  ...HTTP_INTERCEPTOR,
  ...NbAuthModule.forRoot({

    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email-password',  // Nom de la stratégie
        baseEndpoint: environment.api_host,  // Ton API backend
        login: {
          endpoint: '/api/Auth/login',  // Point d'entrée pour la connexion
          method: 'post',      // Méthode HTTP
          redirect: {
            success: '/dashboard',  // Redirection après connexion réussie
            failure: null,          // Pas de redirection après erreur
          },
        },
        token: {
          class: NbAuthJWTToken,  // Utilisation du token JWT
          key: 'token',            // La clé dans la réponse JSON de l'API
        },
      }),
    ],
    forms: {
      login: {
        strategy: 'email-password',
      },
      validation: {
        password: {
          required: true,
          minLength: 4,
          maxLength: 50,
      },
      username: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
    },
  }
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  
  }).providers as Provider[],
  NbSecurityModule.forRoot().providers,
  AnalyticsService,
 // { provide: AuthGuardService, useClass: AuthGuardService },
  { provide: NbRoleProvider, useClass: NbRoleProvider },
  // {
  //   AnalyticsService,
  //   provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  // },
 
];

@NgModule({
  imports: [
    CommonModule,
    AuthModule
    
  ],
  exports: [
    AuthModule,
  ],
  // declarations: [
  //   AuthComponent
  // ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
