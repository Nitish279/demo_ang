import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MonitoringComponent } from './main-content/monitoring/monitoring.component';
import { ReportsComponent } from './main-content/reports/reports.component';
import { TransactionsComponent } from './main-content/transactions/transactions.component';
import { SidebarContentComponent } from './main-content/monitoring/sidebar-content/sidebar-content.component';
import { OnespaceComponent } from './main-content/monitoring/sidebar-content/onespace/onespace.component';
import { ProductivityComponent } from './main-content/monitoring/sidebar-content/productivity/productivity.component';
import { CommunicationsComponent } from './main-content/monitoring/sidebar-content/communications/communications.component';
import { CollaborationComponent } from './main-content/monitoring/sidebar-content/collaboration/collaboration.component';
import { NewsComponent } from './main-content/monitoring/sidebar-content/news/news.component';
import { ProjectsComponent } from './main-content/monitoring/sidebar-content/projects/projects.component';
import { AnalyticsComponent } from './main-content/monitoring/sidebar-content/analytics/analytics.component';
import { ApprovalsComponent } from './main-content/monitoring/sidebar-content/approvals/approvals.component';
// import { SidebarComponent } from './main-content/reports/sidebar/sidebar.component';
import { ReportsSidebarComponent } from './main-content/reports/reports-sidebar/reports-sidebar.component';
import { ReportsSidebarContentComponent } from './main-content/reports/reports-sidebar-content/reports-sidebar-content.component';
import { TransactionsSidebarComponent } from './main-content/transactions/transactions-sidebar/transactions-sidebar.component';
import { TransactionsSidebarContentComponent } from './main-content/transactions/transactions-sidebar-content/transactions-sidebar-content.component';
import { ReportsTab1Component } from './main-content/reports/reports-sidebar-content/reports-tab1/reports-tab1.component';
import { ReportsTab2Component } from './main-content/reports/reports-sidebar-content/reports-tab2/reports-tab2.component';
import { ReportsTab3Component } from './main-content/reports/reports-sidebar-content/reports-tab3/reports-tab3.component';
import { TransactionsTab1Component } from './main-content/transactions/transactions-sidebar-content/transactions-tab1/transactions-tab1.component';
import { TransactionsTab2Component } from './main-content/transactions/transactions-sidebar-content/transactions-tab2/transactions-tab2.component';
import { TransactionsTab3Component } from './main-content/transactions/transactions-sidebar-content/transactions-tab3/transactions-tab3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent, HeaderComponent,
    FooterComponent, SubHeaderComponent, MainContentComponent,
    MonitoringComponent, ReportsComponent, TransactionsComponent,
    SidebarContentComponent, OnespaceComponent, ProductivityComponent,
    CommunicationsComponent, CollaborationComponent, NewsComponent, ProjectsComponent,
    AnalyticsComponent, ApprovalsComponent, ReportsTab1Component, ReportsTab2Component,
    ReportsTab3Component, TransactionsTab1Component, TransactionsTab2Component,
    TransactionsTab3Component, ReportsSidebarComponent, ReportsSidebarContentComponent,
    TransactionsSidebarComponent, TransactionsSidebarContentComponent]
})
export class LayoutModule { }
