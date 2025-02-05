/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdRuleHistory from './ad-rule-history';

/**
 * AdRule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdRule extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      account_id: 'account_id',
      created_by: 'created_by',
      created_time: 'created_time',
      evaluation_spec: 'evaluation_spec',
      execution_spec: 'execution_spec',
      id: 'id',
      name: 'name',
      schedule_spec: 'schedule_spec',
      status: 'status',
      updated_time: 'updated_time',
    });
  }

  static get Status (): Object {
    return Object.freeze({
      deleted: 'DELETED',
      disabled: 'DISABLED',
      enabled: 'ENABLED',
      has_issues: 'HAS_ISSUES',
    });
  }
  static get UiCreationSource (): Object {
    return Object.freeze({
      am_account_overview_recommendations: 'AM_ACCOUNT_OVERVIEW_RECOMMENDATIONS',
      am_activity_history_table: 'AM_ACTIVITY_HISTORY_TABLE',
      am_ad_object_name_card: 'AM_AD_OBJECT_NAME_CARD',
      am_amfe_l3_recommendation: 'AM_AMFE_L3_RECOMMENDATION',
      am_editor_card: 'AM_EDITOR_CARD',
      am_info_card: 'AM_INFO_CARD',
      am_mid_flight_resolution_card: 'AM_MID_FLIGHT_RESOLUTION_CARD',
      am_name_cell_dropdown: 'AM_NAME_CELL_DROPDOWN',
      am_performance_summary: 'AM_PERFORMANCE_SUMMARY',
      am_rule_landing_page_banner: 'AM_RULE_LANDING_PAGE_BANNER',
      am_toolbar_create_rule_dropdown: 'AM_TOOLBAR_CREATE_RULE_DROPDOWN',
      pe_campaign_structure_menu: 'PE_CAMPAIGN_STRUCTURE_MENU',
      pe_editor_card: 'PE_EDITOR_CARD',
      pe_info_card: 'PE_INFO_CARD',
      pe_toolbar_create_rule_dropdown: 'PE_TOOLBAR_CREATE_RULE_DROPDOWN',
      rules_management_page_action_dropdown: 'RULES_MANAGEMENT_PAGE_ACTION_DROPDOWN',
      rules_management_page_rule_group: 'RULES_MANAGEMENT_PAGE_RULE_GROUP',
      rules_management_page_rule_name: 'RULES_MANAGEMENT_PAGE_RULE_NAME',
      rules_management_page_top_nav: 'RULES_MANAGEMENT_PAGE_TOP_NAV',
      rules_view_active_rules_dialog: 'RULES_VIEW_ACTIVE_RULES_DIALOG',
      rule_creation_success_dialog: 'RULE_CREATION_SUCCESS_DIALOG',
      rule_syd_redirect: 'RULE_SYD_REDIRECT',
      rule_templates_dialog: 'RULE_TEMPLATES_DIALOG',
    });
  }

  createExecute (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/execute',
      fields,
      params,
      
    );
  }

  getHistory (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdRuleHistory,
      fields,
      params,
      fetchFirstPage,
      '/history'
    );
  }

  createPreview (fields: Array<string>, params: Object = {}): Promise<AdRule> {
    return this.createEdge(
      '/preview',
      fields,
      params,
      AdRule
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdRule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdRule {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
