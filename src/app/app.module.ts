import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SubHeaderComponent } from './shared/layout/sub-header/sub-header.component';
import { MainContentComponent } from './shared/layout/main-content/main-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MonitoringComponent } from './shared/layout/main-content/monitoring/monitoring.component';
import { ReportsComponent } from './shared/layout/main-content/reports/reports.component';
import { TransactionsComponent } from './shared/layout/main-content/transactions/transactions.component';


import { SidebarComponent } from './shared/layout/main-content/monitoring/sidebar/sidebar.component';
import { SidebarContentComponent } from './shared/layout/main-content/monitoring/sidebar-content/sidebar-content.component';
import { ReportsSidebarComponent } from './shared/layout/main-content/reports/reports-sidebar/reports-sidebar.component';
import { ReportsSidebarContentComponent } from './shared/layout/main-content/reports/reports-sidebar-content/reports-sidebar-content.component';
import { TransactionsSidebarComponent } from './shared/layout/main-content/transactions/transactions-sidebar/transactions-sidebar.component';
import { TransactionsSidebarContentComponent } from './shared/layout/main-content/transactions/transactions-sidebar-content/transactions-sidebar-content.component';

import { AnalyticsComponent } from './shared/layout/main-content/monitoring/sidebar-content/analytics/analytics.component';
import { ApprovalsComponent } from './shared/layout/main-content/monitoring/sidebar-content/approvals/approvals.component';
import { CollaborationComponent } from './shared/layout/main-content/monitoring/sidebar-content/collaboration/collaboration.component';
import { CommunicationsComponent } from './shared/layout/main-content/monitoring/sidebar-content/communications/communications.component';
import { NewsComponent } from './shared/layout/main-content/monitoring/sidebar-content/news/news.component';
import { OnespaceComponent } from './shared/layout/main-content/monitoring/sidebar-content/onespace/onespace.component';
import { ProductivityComponent } from './shared/layout/main-content/monitoring/sidebar-content/productivity/productivity.component';
import { ProjectsComponent } from './shared/layout/main-content/monitoring/sidebar-content/projects/projects.component';


import { ReportsTab1Component } from './shared/layout/main-content/reports/reports-sidebar-content/reports-tab1/reports-tab1.component';
import { ReportsTab2Component } from './shared/layout/main-content/reports/reports-sidebar-content/reports-tab2/reports-tab2.component';
import { ReportsTab3Component } from './shared/layout/main-content/reports/reports-sidebar-content/reports-tab3/reports-tab3.component';

import { TransactionsTab1Component } from './shared/layout/main-content/transactions/transactions-sidebar-content/transactions-tab1/transactions-tab1.component';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'monitoring',
    component: MonitoringComponent,
    children: [
      {
        path: 'onespace',
        component: OnespaceComponent
      },
      {
        path: 'productivity',
        component: ProductivityComponent
      },
      {
        path: 'communications',
        component: CommunicationsComponent
      },
      {
        path: 'collaboration',
        component: CollaborationComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'approvals',
        component: ApprovalsComponent
      }
    ]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    children: [
      {
        path: 'tab1',
        component: ReportsTab1Component
      },
      {
        path: 'tab2',
        component: ReportsTab2Component
      },
      {
        path: 'tab3',
        component: ReportsTab3Component
      }
    ]
  },
  {
      path: 'transactions',
      component: TransactionsComponent,
      children: [
        {
          path: 'tab1',
          component: TransactionsTab1Component
        }
      ]
  }
], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubHeaderComponent,
    MainContentComponent,
    MonitoringComponent,
    ReportsComponent,
    TransactionsComponent,
    SidebarComponent,
    SidebarContentComponent,
    ProjectsComponent,
    ProductivityComponent,
    OnespaceComponent,
    NewsComponent,
    CommunicationsComponent,
    CollaborationComponent,
    ApprovalsComponent,
    AnalyticsComponent,
    ReportsSidebarComponent,
    ReportsSidebarContentComponent,
    TransactionsSidebarComponent,
    TransactionsSidebarContentComponent,
    ReportsTab1Component,
    ReportsTab2Component,
    ReportsTab3Component,
    TransactionsTab1Component
  ],
  imports: [
    BrowserModule,
    rootRouting,
    DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
