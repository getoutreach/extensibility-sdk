/* eslint-disable no-unused-vars */
/**
 * List of supported addon categories.
 * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#categories
 * @export
 * @enum {number}
 */
export enum Category {
  /**
   * Account based marketing extension category
   */
  ACCOUNT_BASED_MARKETING = 'account_based_marketing',

  /**
   * Account plan extension category
   */
  ACCOUNT_PLAN = 'account_plan',

  /**
   * Chat extension category
   */
  CHAT = 'chat',

  /**
   * Conversation intelligence extension category
   */
  CONVERSATION_INTELLIGENCE = 'conversation_intelligence',

  /**
   * CRM extension category
   */
  CRM = 'crm',

  /**
   * Direct mail extension category
   */
  DIRECT_MAIL = 'direct_mail',

  /**
   * Inbox extension category
   */
  INBOX = 'inbox',

  /**
   * Integration platform extension category
   */
  INTEGRATION_PLATFORM = 'integration_platform',

  /**
   * Marketing extension category
   */
  MARKETING = 'marketing',

  /**
   * Privacy and security extension category
   */
  PRIVACY_SECURITY = 'privacy_security',

  /**
   * Sales assets management extension category
   */
  SALES_ASSETS_MANAGEMENT = 'sales_assets_management',

  /**
   * Sales intelligence data extension category
   */
  SALES_INTELLIGENCE_DATA = 'sales_intelligence_data',

  /**
   * Sales productivity extension category
   */
  SALES_PRODUCTIVITY = 'sales_productivity',

  /**
   * Video extension category
   */
  VIDEO = 'video',

  /**
   * Voice extension category
   */
  VOICE = 'voice',

  /**
   * Admin Dashboard extension category
   */
  ADMIN = 'admin',

  /**
   * Meetings extension category
   */
  MEETINGS = 'meetings',

  /**
   * Data warehouse extension category
   */
  DATA_WAREHOUSE = 'data_warehouse',

  /**
   * Reports Dashboard extension category
   */
  REPORTS = 'reports',

  /**
   * Records extension category
   */
  RECORDS = 'records',

  /**
   * Grouping and navigation category
   */
  GROUPING_AND_NAVIGATION = 'grouping_and_navigation',
  
  /**
   * Agents category
   */
  AGENTS = 'agents',
}
