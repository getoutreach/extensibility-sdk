import { AccountContextKeys } from '@outreach/extensibility-sdk-context-keys';
import { ContextParam } from './ContextParam';
import { ExternalInfoUtils } from './ExternalInfoUtils';
import { AccountContext } from './AccountContext';

export const initAccountContext = (
  context: AccountContext,
  param: ContextParam
): boolean => {
  switch (param.key) {
    case AccountContextKeys.CUSTOM_ID:
      context.customId = param.value;
      break;
    case AccountContextKeys.DESCRIPTION:
      context.description = param.value;
      break;
    case AccountContextKeys.EXTERNAL:
      context.externalInfo = ExternalInfoUtils.unpack(param.value);
      break;
    case AccountContextKeys.ID:
      context.id = param.value;
      break;
    case AccountContextKeys.LOCALITY:
      context.locality = param.value;
      break;
    case AccountContextKeys.NAME:
      context.name = param.value;
      break;
    case AccountContextKeys.TAGS:
      context.tags = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_1:
      context.customField1 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_2:
      context.customField2 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_3:
      context.customField3 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_4:
      context.customField4 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_5:
      context.customField5 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_6:
      context.customField6 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_7:
      context.customField7 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_8:
      context.customField8 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_9:
      context.customField9 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_10:
      context.customField10 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_11:
      context.customField11 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_12:
      context.customField12 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_13:
      context.customField13 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_14:
      context.customField14 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_15:
      context.customField15 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_16:
      context.customField16 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_17:
      context.customField17 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_18:
      context.customField18 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_19:
      context.customField19 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_20:
      context.customField20 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_21:
      context.customField21 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_22:
      context.customField22 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_23:
      context.customField23 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_24:
      context.customField24 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_25:
      context.customField25 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_26:
      context.customField26 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_27:
      context.customField27 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_28:
      context.customField28 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_29:
      context.customField29 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_30:
      context.customField30 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_31:
      context.customField31 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_32:
      context.customField32 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_33:
      context.customField33 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_34:
      context.customField34 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_35:
      context.customField35 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_36:
      context.customField36 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_37:
      context.customField37 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_38:
      context.customField38 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_39:
      context.customField39 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_40:
      context.customField40 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_41:
      context.customField41 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_42:
      context.customField42 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_43:
      context.customField43 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_44:
      context.customField44 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_45:
      context.customField45 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_46:
      context.customField46 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_47:
      context.customField47 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_48:
      context.customField48 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_49:
      context.customField49 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_50:
      context.customField50 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_51:
      context.customField51 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_52:
      context.customField52 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_53:
      context.customField53 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_54:
      context.customField54 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_55:
      context.customField55 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_56:
      context.customField56 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_57:
      context.customField57 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_58:
      context.customField58 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_59:
      context.customField59 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_60:
      context.customField60 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_61:
      context.customField61 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_62:
      context.customField62 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_63:
      context.customField63 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_64:
      context.customField64 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_65:
      context.customField65 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_66:
      context.customField66 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_67:
      context.customField67 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_68:
      context.customField68 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_69:
      context.customField69 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_70:
      context.customField70 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_71:
      context.customField71 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_72:
      context.customField72 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_73:
      context.customField73 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_74:
      context.customField74 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_75:
      context.customField75 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_76:
      context.customField76 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_77:
      context.customField77 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_78:
      context.customField78 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_79:
      context.customField79 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_80:
      context.customField80 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_81:
      context.customField81 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_82:
      context.customField82 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_83:
      context.customField83 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_84:
      context.customField84 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_85:
      context.customField85 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_86:
      context.customField86 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_87:
      context.customField87 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_88:
      context.customField88 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_89:
      context.customField89 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_90:
      context.customField90 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_91:
      context.customField91 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_92:
      context.customField92 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_93:
      context.customField93 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_94:
      context.customField94 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_95:
      context.customField95 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_96:
      context.customField96 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_97:
      context.customField97 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_98:
      context.customField98 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_99:
      context.customField99 = param.value;
      break;
    case AccountContextKeys.CUSTOM_FIELD_100:
      context.customField100 = param.value;
      break;
    default:
      return false;
  }

  return true;
};

export const toAccountParams = (context: AccountContext): ContextParam[] => {
  const params: ContextParam[] = [];
  if (context.customId) {
    params.push({
      key: AccountContextKeys.CUSTOM_ID,
      value: context.customId.toString(),
    });
  }
  if (context.description) {
    params.push({
      key: AccountContextKeys.DESCRIPTION,
      value: context.description,
    });
  }

  if (context.externalInfo) {
    params.push({
      key: AccountContextKeys.EXTERNAL,
      value: ExternalInfoUtils.pack(context.externalInfo),
    });
  }

  if (context.id) {
    params.push({
      key: AccountContextKeys.ID,
      value: context.id,
    });
  }

  if (context.locality) {
    params.push({
      key: AccountContextKeys.LOCALITY,
      value: context.locality,
    });
  }
  if (context.name) {
    params.push({
      key: AccountContextKeys.NAME,
      value: context.name,
    });
  }

  if (context.tags) {
    params.push({
      key: AccountContextKeys.TAGS,
      value: context.tags,
    });
  }

  if (context.customField1) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_1,
      value: context.customField1,
    });
  }

  if (context.customField2) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_2,
      value: context.customField2,
    });
  }

  if (context.customField3) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_3,
      value: context.customField3,
    });
  }

  if (context.customField4) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_4,
      value: context.customField4,
    });
  }

  if (context.customField5) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_5,
      value: context.customField5,
    });
  }

  if (context.customField6) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_6,
      value: context.customField6,
    });
  }

  if (context.customField7) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_7,
      value: context.customField7,
    });
  }

  if (context.customField8) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_8,
      value: context.customField8,
    });
  }

  if (context.customField9) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_9,
      value: context.customField9,
    });
  }

  if (context.customField10) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_10,
      value: context.customField10,
    });
  }

  if (context.customField11) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_11,
      value: context.customField11,
    });
  }

  if (context.customField12) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_12,
      value: context.customField12,
    });
  }

  if (context.customField13) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_13,
      value: context.customField13,
    });
  }

  if (context.customField14) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_14,
      value: context.customField14,
    });
  }

  if (context.customField15) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_15,
      value: context.customField15,
    });
  }

  if (context.customField16) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_16,
      value: context.customField16,
    });
  }

  if (context.customField17) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_17,
      value: context.customField17,
    });
  }

  if (context.customField18) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_18,
      value: context.customField18,
    });
  }

  if (context.customField19) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_19,
      value: context.customField19,
    });
  }

  if (context.customField20) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_20,
      value: context.customField20,
    });
  }

  if (context.customField21) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_21,
      value: context.customField21,
    });
  }

  if (context.customField22) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_22,
      value: context.customField22,
    });
  }

  if (context.customField23) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_23,
      value: context.customField23,
    });
  }

  if (context.customField24) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_24,
      value: context.customField24,
    });
  }

  if (context.customField25) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_25,
      value: context.customField25,
    });
  }

  if (context.customField26) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_26,
      value: context.customField26,
    });
  }

  if (context.customField27) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_27,
      value: context.customField27,
    });
  }

  if (context.customField28) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_28,
      value: context.customField28,
    });
  }

  if (context.customField29) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_29,
      value: context.customField29,
    });
  }

  if (context.customField30) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_30,
      value: context.customField30,
    });
  }

  if (context.customField31) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_31,
      value: context.customField31,
    });
  }

  if (context.customField32) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_32,
      value: context.customField32,
    });
  }

  if (context.customField33) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_33,
      value: context.customField33,
    });
  }

  if (context.customField34) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_34,
      value: context.customField34,
    });
  }

  if (context.customField35) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_35,
      value: context.customField35,
    });
  }

  if (context.customField36) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_36,
      value: context.customField36,
    });
  }

  if (context.customField37) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_37,
      value: context.customField37,
    });
  }

  if (context.customField38) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_38,
      value: context.customField38,
    });
  }

  if (context.customField39) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_39,
      value: context.customField39,
    });
  }

  if (context.customField40) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_40,
      value: context.customField40,
    });
  }

  if (context.customField41) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_41,
      value: context.customField41,
    });
  }

  if (context.customField42) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_42,
      value: context.customField42,
    });
  }

  if (context.customField43) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_43,
      value: context.customField43,
    });
  }

  if (context.customField44) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_44,
      value: context.customField44,
    });
  }

  if (context.customField45) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_45,
      value: context.customField45,
    });
  }

  if (context.customField46) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_46,
      value: context.customField46,
    });
  }

  if (context.customField47) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_47,
      value: context.customField47,
    });
  }

  if (context.customField48) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_48,
      value: context.customField48,
    });
  }

  if (context.customField49) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_49,
      value: context.customField49,
    });
  }

  if (context.customField50) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_50,
      value: context.customField50,
    });
  }

  if (context.customField51) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_51,
      value: context.customField51,
    });
  }

  if (context.customField52) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_52,
      value: context.customField52,
    });
  }

  if (context.customField53) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_53,
      value: context.customField53,
    });
  }

  if (context.customField54) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_54,
      value: context.customField54,
    });
  }

  if (context.customField55) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_55,
      value: context.customField55,
    });
  }

  if (context.customField56) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_56,
      value: context.customField56,
    });
  }

  if (context.customField57) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_57,
      value: context.customField57,
    });
  }

  if (context.customField58) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_58,
      value: context.customField58,
    });
  }

  if (context.customField59) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_59,
      value: context.customField59,
    });
  }

  if (context.customField60) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_60,
      value: context.customField60,
    });
  }

  if (context.customField61) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_61,
      value: context.customField61,
    });
  }

  if (context.customField62) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_62,
      value: context.customField62,
    });
  }

  if (context.customField63) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_63,
      value: context.customField63,
    });
  }

  if (context.customField64) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_64,
      value: context.customField64,
    });
  }

  if (context.customField65) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_65,
      value: context.customField65,
    });
  }

  if (context.customField66) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_66,
      value: context.customField66,
    });
  }

  if (context.customField67) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_67,
      value: context.customField67,
    });
  }

  if (context.customField68) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_68,
      value: context.customField68,
    });
  }

  if (context.customField69) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_69,
      value: context.customField69,
    });
  }

  if (context.customField70) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_70,
      value: context.customField70,
    });
  }

  if (context.customField71) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_71,
      value: context.customField71,
    });
  }

  if (context.customField72) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_72,
      value: context.customField72,
    });
  }

  if (context.customField73) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_73,
      value: context.customField73,
    });
  }

  if (context.customField74) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_74,
      value: context.customField74,
    });
  }

  if (context.customField75) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_75,
      value: context.customField75,
    });
  }

  if (context.customField76) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_76,
      value: context.customField76,
    });
  }

  if (context.customField77) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_77,
      value: context.customField77,
    });
  }

  if (context.customField78) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_78,
      value: context.customField78,
    });
  }

  if (context.customField79) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_79,
      value: context.customField79,
    });
  }

  if (context.customField80) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_80,
      value: context.customField80,
    });
  }

  if (context.customField81) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_81,
      value: context.customField81,
    });
  }

  if (context.customField82) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_82,
      value: context.customField82,
    });
  }

  if (context.customField83) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_83,
      value: context.customField83,
    });
  }

  if (context.customField84) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_84,
      value: context.customField84,
    });
  }

  if (context.customField85) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_85,
      value: context.customField85,
    });
  }

  if (context.customField86) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_86,
      value: context.customField86,
    });
  }

  if (context.customField87) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_87,
      value: context.customField87,
    });
  }

  if (context.customField88) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_88,
      value: context.customField88,
    });
  }

  if (context.customField89) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_89,
      value: context.customField89,
    });
  }

  if (context.customField90) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_90,
      value: context.customField90,
    });
  }

  if (context.customField91) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_91,
      value: context.customField91,
    });
  }

  if (context.customField92) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_92,
      value: context.customField92,
    });
  }

  if (context.customField93) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_93,
      value: context.customField93,
    });
  }

  if (context.customField94) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_94,
      value: context.customField94,
    });
  }

  if (context.customField95) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_95,
      value: context.customField95,
    });
  }

  if (context.customField96) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_96,
      value: context.customField96,
    });
  }

  if (context.customField97) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_97,
      value: context.customField97,
    });
  }

  if (context.customField98) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_98,
      value: context.customField98,
    });
  }

  if (context.customField99) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_99,
      value: context.customField99,
    });
  }

  if (context.customField100) {
    params.push({
      key: AccountContextKeys.CUSTOM_FIELD_100,
      value: context.customField100,
    });
  }

  return params;
};
