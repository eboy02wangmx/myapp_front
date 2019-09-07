import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'
import EntryData from './data/EntryData'
import EstimatedData from './data/EstimatedData'
import {cloneDeep} from 'lodash'
import util from '@/util'
import {NHA_O_0001_API} from '@/api/NHA_O_0001_Api'
import {NHA_O_0002_API} from '@/api/NHA_O_0002_Api'
import {NHA_O_0003_API} from '@/api/NHA_O_0003_Api'
import {NHA_O_0004_API} from '@/api/NHA_O_0004_Api'
import {NHA_O_0007_API} from '@/api/NHA_O_0007_Api'
import {NHA_O_0008_API} from '@/api/NHA_O_0008_Api'
import {NHA_O_0009_API} from '@/api/NHA_O_0009_Api'
import {NHA_O_0010_API} from '@/api/NHA_O_0010_Api'
import {NHA_O_0012_API} from '@/api/NHA_O_0012_Api'
import {NHA_O_0013_API} from '@/api/NHA_O_0013_Api'
import {NHA_O_0016_API} from '@/api/NHA_O_0016_Api'
import {NHA_O_0017_API} from '@/api/NHA_O_0017_Api'
import {NHA_O_0018_API} from '@/api/NHA_O_0018_Api'
import {NHA_O_0019_API} from '@/api/NHA_O_0019_Api'
import {NHA_O_0020_API} from '@/api/NHA_O_0020_Api'
import {NHA_O_0021_API} from '@/api/NHA_O_0021_Api'
import {NHA_O_0022_API} from '@/api/NHA_O_0022_Api'
import {NHA_O_0023_API} from '@/api/NHA_O_0023_Api'
import {NHA_O_0024_API} from '@/api/NHA_O_0024_Api'
import {NHA_O_0025_API} from '@/api/NHA_O_0025_Api'
import {NHA_O_0026_API} from '@/api/NHA_O_0026_Api'
import {NHA_O_0029_API} from '@/api/NHA_O_0029_API'
import {NHA_O_0030_API} from '@/api/NHA_O_0030_API'
import {NHA_O_0031_API} from '@/api/NHA_O_0031_Api'
import {NHA_O_0032_API} from '@/api/NHA_O_0032_Api'
// import {NHA_O_0033_API} from '@/api/NHA_O_0033_API'
import {NHA_O_0036_API} from '@/api/NHA_O_0036_API'
import {NHA_O_0038_API} from '@/api/NHA_O_0038_API'
import {NHA_O_0039_API} from '@/api/NHA_O_0039_API'
import {NHA_O_0042_API} from '@/api/NHA_O_0042_API'
import {NHA_O_0043_API} from '@/api/NHA_O_0043_API'
// import {NHA_O_0099_API} from '@/api/NHA_O_0099_Api'
import {NHA_O_0044_API} from '@/api/NHA_O_0044_API'
// 見積連番一覧
import {NHA_O_0041_API} from '@/api/NHA_O_0041_Api'
// 仕様新規の対応 20190320 BY KYOKU START
import {NHA_O_0050_API} from '@/api/NHA_O_0050_Api'
import {NHA_O_0110_API} from '@/api/NHA_O_0110_Api'
import {NHA_O_0111_API} from '@/api/NHA_O_0111_Api'
import {NHA_O_0112_API} from '@/api/NHA_O_0112_Api'
import {NHA_O_0113_API} from '@/api/NHA_O_0113_Api'
// 仕様新規の対応 20190320 BY KYOKU END

import {NHA_O_0150_API} from '@/api/NHA_O_0150_Api'
import {NHA_O_0151_API} from '@/api/NHA_O_0151_Api'
import {NHA_O_0152_API} from '@/api/NHA_O_0152_Api'
import {NHA_O_0153_API} from '@/api/NHA_O_0153_Api'
import {NHA_O_0154_API} from '@/api/NHA_O_0154_Api'
import {NHA_O_0155_API} from '@/api/NHA_O_0155_Api'

export default {
  state: {
    userkanriItems: null,
    // 1:インターネット契約、2:ペーパレス募集
    entryType: '2',
    // 見積連番一覧
    entryNoList: null,
    totalSize: 0,
    entryNo: null,
    userName: null,
    kengen: null,
    albums: [],
    userInfo: [],
    riyos: [],
    // 申込一時保存データ（local用の拡張を含む）
    data: new EntryData(),

    // 申込一時保存訂正前データ
    dataBeforeCorrection: {},

    // 審査時点データ
    dataAppraisal: {},
    dataAppraisalNotNull: false,

    // 申込一時保存ファイルアップロードデータ
    fileList: [],

    // 申込一時保存警告情報データ
    alertInfo: {},

    // 見積書データ
    estimatedData: new EstimatedData(),

    // 住所データ
    addressData: [],

    // 明記物件明細書入力画面データ
    specificationArticleData: [],
    specificationArticleDataChangeFlag: false,
    // 他契約有無確認画面データ
    withOtherAgreeData: {confirmTermClearFlag: null, saveSuccessFlag: false},
    // 募集人ID検索データ
    searchRecruitmentIdData: {},
    selectedRecruitment: {},

    // 各種資料アップロード画面 郵送フラグ
    sendFlagData: {},

    // 代理店分担入力ポープアップ表示フラグ
    showAgentShareInput: false,
    // 代理店分担入力ポープアップ
    agentShareInputData: {agentCodeList1: [], agentCodeList2: [], agentCodeList3: [], sectionName: null},

    // 販売できる特約リスト
    withSaleCanList: {},

    // 引受制限リスト
    acceptLimitList: [],

    // 引受制限決定番号保存リスト
    acceptLimitConfirmList: [],

    // 引受制限該当ID
    acceptLimitHitRules: [],

    acceptLimitConfirmData: {seigenCd: '', ketteiNo: ''},

    // ACTIONSの同期情報（APIのresponseにdoingを拡張したデータ）
    sync: {
      [ACTIONS.CONFIGS_INIT]: { doing: false },
      [ACTIONS.MYAPP_SVR_CHECK]: { doing: false },
      [ACTIONS.MYAPP_SVR_ENTRY_LOAD]: { doing: false },
      [ACTIONS.MYAPP_SVR_ENTRY_SAVE]: { doing: false },
      [ACTIONS.MYAPP_SVR_CONFIRM_FEE]: { doing: false },
      [ACTIONS.MYAPP_SVR_REQUEST_REVIEW]: { doing: false },
      [ACTIONS.MYAPP_SVR_FILE_UPLOAD]: { doing: false },
      [ACTIONS.MYAPP_SVR_FILE_DELETE]: { doing: false },
      [ACTIONS.MYAPP_SVR_FILE_DELETE_ARRAY]: { doing: false },
      [ACTIONS.MYAPP_SVR_ENTRY_REQUEST]: { doing: false },
      [ACTIONS.MYAPP_SVR_ENTRY_REGISTRATION]: { doing: false },
      [ACTIONS.MYAPP_SVR_ENTRYNO_REINFORM]: { doing: false },
      [ACTIONS.MYAPP_SVR_ADD_SEARCH]: { doing: false },
      [ACTIONS.MYAPP_SVR_ESTIMATED]: { doing: false },
      [ACTIONS.MYAPP_SVR_CALC_ESTIMATE]: { doing: false },
      [ACTIONS.MYAPP_SVR_ACQUISITION_ANNUAL]: { doing: false },
      [ACTIONS.MYAPP_SVR_OTHER_METHOD]: { doing: false },
      [ACTIONS.MYAPP_SVR_OVERVIEW]: { doing: false },
      [ACTIONS.MYAPP_SVR_HOUSEHOLD_EVOLUTION]: { doing: false },
      [ACTIONS.MYAPP_SVR_CALC_EARTHQUAKE]: { doing: false },
      [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CHECK]: { doing: false },
      [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE]: { doing: false },
      [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR]: { doing: false },
      [ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_INIT]: { doing: false },
      [ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_COMPLETED]: { doing: false },
      [ACTIONS.MYAPP_WITH_OTHER_CONFIRM]: { doing: false },
      [ACTIONS.MYAPP_SEARCH_RECRUITMENT]: { doing: false },
      [ACTIONS.MYAPP_AGENT_SHARE_INPUT_COMPLETED]: { doing: false },
      [ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST]: { doing: false },
      [ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW]: { doing: false },
      [ACTIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API]: { doing: false },
      [ACTIONS.MYAPP_ESTIMATE_OPTION_INIT]: { doing: false },
      [ACTIONS.MYAPP_ENTRY_REQUEST_ACCOUNT]: { doing: false },
      [ACTIONS.MYAPP_BANK_SEARCH]: { doing: false },
      [ACTIONS.MYAPP_GEN_PDF]: { doing: false },
      [ACTIONS.MYAPP_READ_ENTRY_NO_LIST]: { doing: false },
      [ACTIONS.MYAPP_GEN_POLICY_NO]: { doing: false },
      [ACTIONS.MYAPP_USER_LOGIN]: { doing: false },
      [ACTIONS.MYAPP_IMAGE_UPLOAD]: { doing: false },
      [ACTIONS.MYAPP_USER_CREATE]: { doing: false },
      [ACTIONS.MYAPP_USER_KANRI]: { doing: false },
      [ACTIONS.MYAPP_USER_INSERT]: { doing: false },
      [ACTIONS.MYAPP_USER_DELETE]: { doing: false },
      [ACTIONS.MYAPP_USER_ALBUM]: { doing: false },
      [ACTIONS.MYAPP_GET_USER_INFO]: { doing: false },
      [ACTIONS.MYAPP_ALBUMCREATE]: { doing: false },
      [ACTIONS.MYAPP_ALBUM_REMOVE]: { doing: false },
      [ACTIONS.MYAPP_USER_RIYO]: { doing: false },
      [ACTIONS.MYAPP_USER_RIYOEFF]: { doing: false }
    },
    // 銀行検索結果
    bankitems: [],
    subbankitems: [],
    selecteditem: {},
    isprinted: false, // 銀行印刷書PrintFlag
    entryCreditCardConfirmed: 0
  },
  getters: {
    isBothFireInsurance: state => {
      return (state.data.withBuildingFireInsurance === 1 && state.data.withHouseholdFireInsurance === 1)
    },
    afterInspection: state => {
      return (state.data.entryStatus >= 4)
    },
    isAcceptLimitPopup: state => {
      return (state.acceptLimitHitRules.length > 0)
    },
    isAcceptLimitPass: state => {
      if (state.acceptLimitHitRules.length === 0) {
        return true
      } else {
        let confirmList = util.getAcceptLimitedRules(cloneDeep(state.acceptLimitConfirmList))
        let isAcceptLimitConfirmed = util.isListEqual(cloneDeep(state.acceptLimitHitRules), confirmList)
        return isAcceptLimitConfirmed
      }
    }
  },
  actions: {
    /**
     * 見積連番一覧を取得する
     */
    async [ACTIONS.MYAPP_READ_ENTRY_NO_LIST] ({ state, dispatch, commit }, request) {
      const myAction = ACTIONS.MYAPP_READ_ENTRY_NO_LIST

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      commit(MUTATIONS.MYAPP_SET_SYNC, { [myAction]: { doing: true } })
      // エラークリア
      commit(MUTATIONS.API_CLEAR_ERROR)

      // 実行
      await NHA_O_0041_API.readEntryNoList(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_READ_ENTRY_NO_LIST, response.data)
          if (response.data.count === 0) {
            dispatch(ACTIONS.ERROR_OPEN, '見積連番情報が見つかりませんでした。')
          } else {
            dispatch(ACTIONS.POPUP_OPEN, 'MitumoriItemList')
          }
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    [ACTIONS.MYAPP_SET_ENTRY_NO] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_SET_ENTRY_NO, data)
    },
    /**
     * 申込の入力データをクリア
     */
    [ACTIONS.MYAPP_CLEAR] ({ commit }) {
      commit(MUTATIONS.MYAPP_CLEAR_DATA)
    },
    /**
     * 申込の入力データを更新（local専用の拡張項目を再計算）
     */
    [ACTIONS.MYAPP_SAVE] ({ state, commit }, data) {
      // 変更チェック
      const change = (valA, valB) => {
        if (!valA || !valB) return false
        if (valA === valB) return false
        return true
      }

      // 建物の評価額再計算用初期化（概観法）
      if (state.data.withNewBuildingValueKnown === 2) {
        if (change(data.buildingFrom, state.data.buildingFrom)) {
          data.apartmentClassification = null // マンション評価基準
          data.includFoundationWork = null // 基礎工事含む
        }
        if (change(data.buildingFrom, state.data.buildingFrom) ||
          change(data.structureGrade, state.data.structureGrade) ||
          change(data.buildingLocation, state.data.buildingLocation) ||
          change(data.buildingArea, state.data.buildingArea) ||
          (change(data.buildingFloor, state.data.buildingFloor) && data.buildingFrom === 2)
        ) {
          data.policyCurrentReplacementValue = null // 協定再調達価額
          data.policyCurrentReplacementValueMin = null // 協定再調達価額Min
          data.policyCurrentReplacementValueMax = null // 協定再調達価額Max
          data.buildingAppraisedLower = null // 建物評価額（下限）
          data.buildingAppraisedUpper = null // 建物評価額（上限）
          data.fenceValue = null // 門・塀・車庫価額
          data.newBuildingValue = null // 新築時の建築価額
          data.fireBuildingAmount = null // 火災保険建物保険金額
        }
      }
      // 建物の評価額再計算用初期化（取得年次法）
      if (state.data.withNewBuildingValueKnown === 1) {
        if (change(data.buildingFrom, state.data.buildingFrom)) {
          data.apartmentClassification = null // マンション評価基準
          data.includFoundationWork = null // 基礎工事含む
        }
        if (change(data.buildingFrom, state.data.buildingFrom) ||
          change(data.structureGrade, state.data.structureGrade) ||
          change(data.buildingDate, state.data.buildingDate)
        ) {
          data.policyCurrentReplacementValue = null // 協定再調達価額
          data.policyCurrentReplacementValueMin = null // 協定再調達価額Min
          data.policyCurrentReplacementValueMax = null // 協定再調達価額Max
          data.fenceValue = null // 門・塀・車庫価額
          data.fireBuildingAmount = null // 火災保険建物保険金額
        }
      }

      // 火災保険の保険金額を変更した場合、地震保険の保険金額をリセット
      if (!util.isEmptyOrUndef(data.withBuildingFireInsurance) && data.withBuildingFireInsurance !== 1) {
        data.earthquakeBuildingAmount = ''
      } else if (!util.isEmptyOrUndef(state.data.earthquakeBuildingAmount) &&
          !util.isEmptyOrUndef(data.fireBuildingAmount) && state.data.LocalBackup_fireBuildingAmount !== data.fireBuildingAmount) {
        data.earthquakeBuildingAmount = ''
        if (state.dataAppraisalNotNull) {
          data.earthquakeBuildingAmount = state.dataAppraisal.earthquakeBuildingAmount
        }
      }
      if (!util.isEmptyOrUndef(data.withHouseholdFireInsurance) && data.withHouseholdFireInsurance !== 1) {
        data.earthquakeHouseholdAmount = ''
      } else if (!util.isEmptyOrUndef(state.data.earthquakeHouseholdAmount) &&
          !util.isEmptyOrUndef(data.fireHouseholdAmount) && state.data.LocalBackup_fireHouseholdAmount !== data.fireHouseholdAmount) {
        data.earthquakeHouseholdAmount = ''
        if (state.dataAppraisalNotNull) {
          data.earthquakeHouseholdAmount = state.dataAppraisal.earthquakeHouseholdAmount
        }
      }

      // 建物建築年月を変更した場合、地震保険割引の種別を再計算
      if (data.buildingDate !== undefined && data.buildingDate !== null) {
        data.earthquakeDiscountKind = util.parse.int(data.buildingDate) < 198106 ? 1 : 2

        // 種別が変わったら地震保険割引の選択をリセット
        if (state.data.earthquakeDiscountKind !== undefined && state.data.earthquakeDiscountKind !== null && data.earthquakeDiscountKind !== state.data.earthquakeDiscountKind) {
          data.confirmEarthquakeDiscount = null
        }
      }

      // 都道府県名称
      const prefectures = this.state.configs.prefectures.find((item) => item.value === data.buildingLocation)
      if (prefectures !== undefined) {
        data.buildingLocationName = prefectures.label
      }

      // 申込ステータス
      if (data.entryStatus !== undefined) {
        data.isCheckedStatus = data.entryStatus >= 4
      }

      // 保険金額画面はACTIONS.MYAPP_SAVEを使わずstateを更新するので、更新処理で利用する項目をバックアップ
      if (data.fireBuildingAmount !== undefined) {
        data.LocalBackup_fireBuildingAmount = data.fireBuildingAmount
      }
      if (data.fireHouseholdAmount !== undefined) {
        data.LocalBackup_fireHouseholdAmount = data.fireHouseholdAmount
      }

      // 保存
      commit(MUTATIONS.MYAPP_SET_DATA, data)
    },
    /**
     * [SERVER APIと連携] 入力チェック
     */
    async [ACTIONS.MYAPP_SVR_CHECK] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_CHECK

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // Endpointを決定
      let api
      switch (request.screenID) {
        case 'Top':
          if (state.entryType === '2') {
            api = NHA_O_0004_API.getTopMenuCheckAgent
          } else {
            api = NHA_O_0004_API.getTopMenuCheck
          }
          break
        case 'MailConfirm':
          api = NHA_O_0004_API.getMailConfirmCheck
          break
        case 'Building':
          request.buildingBuildingDate = request.buildingDate // 建物建築年月
          api = NHA_O_0004_API.getBuiInfCheck
          break

        case 'InsuranceAmount':
          api = NHA_O_0004_API.getInsAmoCheck
          break

        case 'Earthquake':
          api = NHA_O_0004_API.getEarInsCheck
          break

        case 'Estimate':
          api = NHA_O_0004_API.getTriCalCheck
          break
      }

      // 実行
      await api(request)
        .then(function (response) {
          if (request.screenID === 'MailConfirm') {
            commit(MUTATIONS.MYAPP_SET_AGENT_CODE, response)
          }
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 申込の入力データに読込
     */
    async [ACTIONS.MYAPP_SVR_ENTRY_LOAD] ({ state, dispatch, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ENTRY_LOAD

      // 受信データの調整関数
      const adjustData = (readData) => {
        if (readData === undefined || readData === null) {
          return {}
        }
        const outData = {}
        outData.mytoken = util.parse.string(readData.mytoken) // MyToken
        outData.screenID = util.parse.string(readData.screenID) // 一時保存画面ID
        outData.entryNo = util.parse.string(readData.entryNo) // entryNo
        outData.updateTime = util.parse.string(readData.updateTime) // updateTime
        outData.entryStatus = util.parse.int(readData.entryStatus) // 申込ステータス
        outData.entryType = util.parse.int(readData.entryType) // 申込区分
        outData.paymentType = util.parse.int(readData.paymentType) // 支払区分
        outData.startDate = util.parse.string(readData.startDate) // 保険始期日
        outData.fireEndDate = util.parse.string(readData.fireEndDate) // 火災保険終期日
        outData.earthquakeEndDate = util.parse.string(readData.earthquakeEndDate) // 地震保険終期日
        outData.buildingOwnership = util.parse.int(readData.buildingOwnership) // 建物所有関係
        outData.buildingFrom = util.parse.int(readData.buildingFrom) // 建物形態
        outData.buildingFloor = util.parse.int(readData.buildingFloor) // 建物階数
        outData.basementFloor = util.parse.int(readData.basementFloor) // 地下階数
        outData.residentialFloor = util.parse.int(readData.residentialFloor) // 居住階数
        outData.buildingStructure = util.parse.int(readData.buildingStructure) // 建物構造
        outData.steelBuildingType = util.parse.int(readData.steelBuildingType) // 鉄骨造建物種類詳細
        outData.otherBuildingType = util.parse.int(readData.otherBuildingType) // その他建物種類詳細
        outData.structureGrade = util.parse.string(readData.structureGrade) // 構造級別
        outData.structureConfirmed = util.parse.int(readData.structureConfirmed) // 構造確認済み
        outData.buildingLocation = readData.buildingLocation // 建物所在地
        outData.buildingDate = util.parse.string(readData.buildingBuildingDate) // 建物建築年月
        outData.buildingArea = util.parse.float(readData.buildingArea) // 建物面積
        outData.documentsConfirmed = util.parse.int(readData.documentsConfirmed) // 書類提出確認済み
        // outData.methodType = util.parse.int(readData.methodType) // 評価法区分
        outData.otherMethodAmount = util.parse.string(readData.otherMethodAmount) // その他評価法入力金額
        console.log('readData.otherMethodAmount = ' + readData.otherMethodAmount)
        outData.otherMethodBasis = util.parse.string(readData.otherMethodBasis) // その他評価法根拠欄
        outData.withHousingloan = util.parse.int(readData.withHousingloan) // 住宅ローン利用有無
        outData.withBuildingFireInsurance = util.parse.int(readData.withBuildingFireInsurance) // 建物火災保険加入有無
        outData.withNewBuildingValueKnown = util.parse.int(readData.withNewBuildingValueKnown) // 新築時の建築価額通知有無
        outData.policyCurrentReplacementValue = util.parse.senToMan(readData.policyCurrentReplacementValue) // 協定再調達価額
        outData.policyCurrentReplacementValueMin = util.parse.senToMan(readData.policyCurrentReplacementValueMin) // 協定再調達価額Min
        outData.policyCurrentReplacementValueMax = util.parse.senToMan(readData.policyCurrentReplacementValueMax) // 協定再調達価額Max
        outData.fenceValue = util.parse.int(readData.fenceValue) // 門・塀・車庫価額
        outData.newBuildingValue = util.parse.senToMan(readData.newBuildingValue) // 新築時の建築価額
        outData.apartmentClassification = util.parse.int(readData.apartmentClassification) // マンション評価基準
        outData.withHouseholdFireInsurance = util.parse.int(readData.withHouseholdFireInsurance) // 家財火災保険加入有無
        outData.householderAge = util.parse.int(readData.householderAge) // 世帯主年令
        outData.numberOfChildren = util.parse.int(readData.numberOfChildren) // 子供人数
        outData.withSpouse = util.parse.int(readData.withSpouse) // 配偶者有無
        outData.housemates = util.parse.int(readData.housemates) // 同居人人数
        outData.buildingAppraisedLower = util.parse.senToMan(readData.buildingAppraisedLower) // 建物評価額（下限）
        outData.buildingAppraisedUpper = util.parse.senToMan(readData.buildingAppraisedUpper) // 建物評価額（上限）
        outData.householdAppraisedLower = util.parse.senToMan(readData.householdAppraisedLower) // 家財評価額（下限）
        outData.householdAppraisedUpper = util.parse.senToMan(readData.householdAppraisedUpper) // 家財評価額（上限）
        outData.withBuildingEarthquakeInsurance = util.parse.int(readData.withBuildingEarthquakeInsurance) // 建物地震保険加入有無
        outData.withHouseholdEarthquakeInsurance = util.parse.int(readData.withHouseholdEarthquakeInsurance) // 家財地震保険加入有無
        outData.confirmEarthquakeDiscount = util.parse.int(readData.confirmEarthquakeDiscount) // 地震保険割引確認
        outData.earthquakeInsuranceDiscountPercent = util.parse.int(readData.earthquakeInsuranceDiscountPercent) // 地震保険割引率
        outData.seismicGradeDiscountGrade = util.parse.int(readData.seismicGradeDiscountGrade) // 耐震等級割引等級
        outData.seismicDiagnosisDate = util.parse.string(readData.seismicDiagnosisDate) // 耐震診断年月日
        outData.buildingDateConfirmed = util.parse.int(readData.buildingDateConfirmed) // 建築年月確認済み
        outData.discountCertificateConfirmed = util.parse.int(readData.discountCertificateConfirmed) // 割引証明書類注意事項確認済み
        outData.includFoundationWork = util.parse.int(readData.includFoundationWork) // 基礎工事含む
        outData.includJoinery = util.parse.int(readData.includJoinery) // 畳・建具等含む
        outData.includFence = util.parse.int(readData.includFence) // 門・塀・垣含む
        outData.includGarage = util.parse.int(readData.includGarage) // 物置車庫等含む
        outData.includShared = util.parse.int(readData.includShared) // 共用部分含む
        outData.fireTerm = util.parse.int(readData.fireTerm) // 火災保険期間
        outData.earthquakeTerm = util.parse.int(readData.earthquakeTerm) // 地震保険期間
        outData.earthquakeAutomaticContinuation = util.parse.int(readData.earthquakeAutomaticContinuation) // 地震自動継続
        outData.selectPlan = util.parse.int(readData.selectPlan) // 選択プラン
        outData.advanceWithFireCompensation = util.parse.int(readData.advanceWithFireCompensation) // おすすめプラン火災・落雷・破裂・爆発補償有無
        outData.advanceWithWindCompensation = util.parse.int(readData.advanceWithWindCompensation) // おすすめプラン風災・ひょう災・雪災補償有無
        outData.advanceWindCopayment = util.parse.senToMan(readData.advanceWindCopayment) // おすすめプラン風災・ひょう災・雪災自己負担額
        outData.advanceWithWaterCompensation = util.parse.int(readData.advanceWithWaterCompensation) // おすすめプラン水災補償有無
        outData.advanceWithWaterStainedCompensation = util.parse.int(readData.advanceWithWaterStainedCompensation) // おすすめプラン水濡れ・盗難補償有無
        outData.advanceWithCorruptionCompensation = util.parse.int(readData.advanceWithCorruptionCompensation) // おすすめプラン破損・汚損等補償有無
        outData.advanceCorruptionCopayment = util.parse.senToMan(readData.advanceCorruptionCopayment) // おすすめプラン破損・汚損等自己負担額
        outData.advanceCorruptionHouseholdLimited = util.parse.senToMan(readData.advanceCorruptionHouseholdLimited) // おすすめプラン破損・汚損等家財支払限度額
        outData.advanceWithDisasterExpensesCompensation = util.parse.int(readData.advanceWithDisasterExpensesCompensation) // おすすめプラン災害時諸費用補償有無
        outData.advanceDisasterExpensesLimited = util.parse.int(readData.advanceDisasterExpensesLimited) // おすすめプラン災害時諸費用支払限度額
        outData.advanceWithEarthquakeCompensationBuilding = util.parse.int(readData.advanceWithEarthquakeCompensationBuilding) // おすすめプラン地震・噴火・津波補償有無（建物）
        outData.advanceWithEarthquakeCompensationHousehold = util.parse.int(readData.advanceWithEarthquakeCompensationHousehold) // おすすめプラン地震・噴火・津波補償有無（家財）
        outData.advanceWithExpenseCompensation = util.parse.int(readData.advanceWithExpenseCompensation) // おすすめプラン費用保険金補償有無
        outData.advanceWithPersonalLiability = util.parse.int(readData.advanceWithPersonalLiability) // おすすめプラン個人賠償責任補償特約有無
        outData.advanceWithTenantLiability = util.parse.int(readData.advanceWithTenantLiability) // おすすめプラン借家人賠償責任補償特約有無
        outData.advanceTenantLiabilityLimited = util.parse.int(readData.advanceTenantLiabilityLimited) // おすすめプラン借家人賠償責任補償特約支払限度額
        outData.advanceWithBuildingManageLiability = util.parse.int(readData.advanceWithBuildingManageLiability) // おすすめプラン建物管理賠償責任補償特約有無
        outData.advanceBuildingManageLiabilityLimited = util.parse.int(readData.advanceBuildingManageLiabilityLimited) // おすすめプラン建物管理賠償責任補償特約支払限度額
        outData.advanceWithExposureCompensation = util.parse.int(readData.advanceWithExposureCompensation) // おすすめプラン類焼損害補償特約有無
        outData.advanceWithRebuildingCostCompensation = util.parse.int(readData.advanceWithRebuildingCostCompensation) // おすすめプラン建替費用補償特約有無
        outData.advanceWithCommonRepairCostCompensation = util.parse.int(readData.advanceWithCommonRepairCostCompensation) // おすすめプラン共用部分修理費用補償特約有無
        outData.advanceWithCrimeCostCompensation = util.parse.int(readData.advanceWithCrimeCostCompensation) // おすすめプラン防犯対策費用補償特約有無
        outData.advanceWithCorbelHouseholdCompensation = util.parse.int(readData.advanceWithCorbelHouseholdCompensation) // おすすめプラン持ち出し家財補償特約有無
        outData.advanceWithMovingCompensation = util.parse.int(readData.advanceWithMovingCompensation) // おすすめプラン引越し中の損害補償特約有無
        outData.freeWithFireCompensation = util.parse.int(readData.freeWithFireCompensation) // フリープラン火災・落雷・破裂・爆発補償有無
        outData.freeWithWindCompensation = util.parse.int(readData.freeWithWindCompensation) // フリープラン風災・ひょう災・雪災補償有無
        outData.freeWindCopayment = util.parse.senToMan(readData.freeWindCopayment) // フリープラン風災・ひょう災・雪災自己負担額
        outData.freeWithWaterCompensation = util.parse.int(readData.freeWithWaterCompensation) // フリープラン水災補償有無
        outData.freeWithWaterStainedCompensation = util.parse.int(readData.freeWithWaterStainedCompensation) // フリープラン水濡れ・盗難補償有無
        outData.freeWithCorruptionCompensation = util.parse.int(readData.freeWithCorruptionCompensation) // フリープラン破損・汚損等補償有無
        outData.freeCorruptionCopayment = util.parse.senToMan(readData.freeCorruptionCopayment) // フリープラン破損・汚損等自己負担額
        outData.freeCorruptionHouseholdLimited = util.parse.senToMan(readData.freeCorruptionHouseholdLimited) // フリープラン破損・汚損等家財支払限度額
        outData.freeWithEarthquakeCompensationBuilding = util.parse.int(readData.freeWithEarthquakeCompensationBuilding) // フリープラン地震・噴火・津波補償有無（建物）
        outData.freeWithEarthquakeCompensationHousehold = util.parse.int(readData.freeWithEarthquakeCompensationHousehold) // フリープラン地震・噴火・津波補償有無（家財）
        outData.freeWithDisasterExpensesCompensation = util.parse.int(readData.freeWithDisasterExpensesCompensation) // フリープラン災害時諸費用補償有無
        outData.freeDisasterExpensesLimited = util.parse.int(readData.freeDisasterExpensesLimited) // フリープラン災害時諸費用支払限度額
        outData.freeWithExpenseCompensation = util.parse.int(readData.freeWithExpenseCompensation) // フリープラン費用保険金補償有無
        outData.freeWithPersonalLiability = util.parse.int(readData.freeWithPersonalLiability) // フリープラン個人賠償責任補償特約有無
        outData.freeWithTenantLiability = util.parse.int(readData.freeWithTenantLiability) // フリープラン借家人賠償責任補償特約有無
        outData.freeTenantLiabilityLimited = util.parse.int(readData.freeTenantLiabilityLimited) // フリープラン借家人賠償責任補償特約支払限度額
        outData.freeWithBuildingManageLiability = util.parse.int(readData.freeWithBuildingManageLiability) // フリープラン建物管理賠償責任補償特約有無
        outData.freeBuildingManageLiabilityLimited = util.parse.int(readData.freeBuildingManageLiabilityLimited) // フリープラン建物管理賠償責任補償特約支払限度額
        outData.freeWithExposureCompensation = util.parse.int(readData.freeWithExposureCompensation) // フリープラン類焼損害補償特約有無
        outData.freeWithRebuildingCostCompensation = util.parse.int(readData.freeWithRebuildingCostCompensation) // フリープラン建替費用補償特約有無
        outData.freeWithCommonRepairCostCompensation = util.parse.int(readData.freeWithCommonRepairCostCompensation) // フリープラン共用部分修理費用補償特約有無
        outData.freeWithCrimeCostCompensation = util.parse.int(readData.freeWithCrimeCostCompensation) // フリープラン防犯対策費用補償特約有無
        outData.freeWithCorbelHouseholdCompensation = util.parse.int(readData.freeWithCorbelHouseholdCompensation) // フリープラン持ち出し家財補償特約有無
        outData.freeWithMovingCompensation = util.parse.int(readData.freeWithMovingCompensation) // フリープラン引越し中の損害補償特約有無
        outData.waterLeakBuildingManageCompensationOption = util.parse.int(readData.freeWithWaterLeakBuildingManageCompensation) // フリープラン漏水による建物管理賠償責任補償対象外特約特約有無
        outData.waterStainedExpensesCompensationOption = util.parse.int(readData.freeWithWaterStainedExpensesCompensation) // フリープラン水濡れ原因調査費用補償特約有無
        outData.windPaymentMethodContractOption = util.parse.int(readData.freeWithWindPaymentMethodContract) // フリープラン引越し中の風災等支払方法変更特約有無
        outData.waterPaymentMethodContractOption = util.parse.int(readData.freeWithWaterPaymentMethodContract) // フリープラン水災支払方法変更特約有無
        outData.orporateInsuredContractOption = util.parse.int(readData.freeWithCorporationAgreement) // フリープラン法人等契約の被保険者に関する特約有無
        outData.fireDangerCompensationOption = util.parse.int(readData.freeWithFireOnlyCompensation) // フリープラン火災等危険のみ補償特約有無
        outData.fireBuildingAmount = util.parse.senToMan(readData.fireBuildingAmount) // 火災保険建物保険金額
        outData.fireHouseholdAmount = util.parse.senToMan(readData.fireHouseholdAmount) // 火災保険家財保険金額
        outData.earthquakeBuildingAmount = util.parse.senToMan(readData.earthquakeBuildingAmount) // 地震保険建物保険金額
        outData.earthquakeBuildingAmountLower = util.parse.senToMan(readData.earthquakeBuildingAmountLower) // 建物の地震保険保険金額（下限）
        outData.earthquakeBuildingAmountUpper = util.parse.senToMan(readData.earthquakeBuildingAmountUpper) // 建物の地震保険保険金額（上限）
        outData.earthquakeHouseholdAmount = util.parse.senToMan(readData.earthquakeHouseholdAmount) // 地震保険家財保険金額
        outData.earthquakeHouseholdAmountLower = util.parse.senToMan(readData.earthquakeHouseholdAmountLower) // 家財の地震保険保険金額（下限）
        outData.earthquakeHouseholdAmountUpper = util.parse.senToMan(readData.earthquakeHouseholdAmountUpper) // 家財の地震保険保険金額（上限）
        outData.advanceFireBuildingFee = util.parse.int(readData.advanceFireBuildingFee) // おすすめプラン火災保険建物保険料
        outData.advanceFireHouseholdFee = util.parse.int(readData.advanceFireHouseholdFee) // おすすめプラン火災保険家財保険料
        outData.advanceFireFee = util.parse.int(readData.advanceFireFee) // おすすめプラン火災保険料
        outData.advanceEarthquakeBuildingFee = util.parse.int(readData.advanceEarthquakeBuildingFee) // おすすめプラン地震保険建物保険料
        outData.advanceEarthquakeHouseholdFee = util.parse.int(readData.advanceEarthquakeHouseholdFee) // おすすめプラン地震保険家財保険料
        outData.advanceEarthquakeFee = util.parse.int(readData.advanceEarthquakeFee) // おすすめプラン地震保険料
        outData.advanceTotalFee = util.parse.int(readData.advanceTotalFee) // おすすめプラン合計保険料
        outData.advanceEquipmentFee = util.parse.string(readData.equipmentFee) // 設備什器保険料
        outData.advanceGoodsFee = util.parse.string(readData.advanceGoodsFee) // 商品製品保険料
        outData.advanceSpecificationArticleFee = util.parse.string(readData.advanceSpecificationArticleFee) // 明記物件保険料
        outData.advancePersonalLiabilityFee = util.parse.string(readData.advancePersonalLiabilityFee) // 個人賠償保険料
        outData.advanceTenantLiabilityFee = util.parse.string(readData.advanceTenantLiabilityFee) // 借家人賠償保険料
        outData.advanceExposureFee = util.parse.string(readData.advanceExposureFee) // 類焼保険料
        outData.freeFireBuildingFee = util.parse.int(readData.freeFireBuildingFee) // フリープラン火災保険建物保険料
        outData.freeFireHouseholdFee = util.parse.int(readData.freeFireHouseholdFee) // フリープラン火災保険家財保険料
        outData.freeFireFee = util.parse.int(readData.freeFireFee) // フリープラン火災保険料
        outData.freeEarthquakeBuildingFee = util.parse.int(readData.freeEarthquakeBuildingFee) // フリープラン地震保険建物保険料
        outData.freeEarthquakeHouseholdFee = util.parse.int(readData.freeEarthquakeHouseholdFee) // フリープラン地震保険家財保険料
        outData.freeEarthquakeFee = util.parse.int(readData.freeEarthquakeFee) // フリープラン地震保険料
        outData.freeTotalFee = util.parse.int(readData.freeTotalFee) // フリープラン合計保険料
        outData.freeEquipmentFee = util.parse.string(readData.equipmentFee) // 設備什器保険料
        outData.freeGoodsFee = util.parse.string(readData.freeGoodsFee) // 商品製品保険料
        outData.freeSpecificationArticleFee = util.parse.string(readData.freeSpecificationArticleFee) // 明記物件保険料
        outData.freePersonalLiabilityFee = util.parse.string(readData.freePersonalLiabilityFee) // 個人賠償保険料
        outData.freeTenantLiabilityFee = util.parse.string(readData.freeTenantLiabilityFee) // 借家人賠償保険料
        outData.freeExposureFee = util.parse.string(readData.freeExposureFee) // 類焼保険料
        outData.objectAddressSame = util.parse.int(readData.objectAddressSame) // 保険対象住所同異
        outData.objectYubin = util.parse.string(readData.objectYubin) // 保険対象郵便番号
        outData.objectAddressCode = util.parse.string(readData.objectAddressCode) // 保険対象住所コード
        outData.objectAddress = util.parse.string(readData.objectAddress) // 保険対象住所
        outData.objectAddressKana = util.parse.string(readData.objectAddressKana) // 保険対象住所カナ
        outData.objectAddressFree = util.parse.string(readData.objectAddressFree) // 保険対象住所
        outData.objectAddressKanaFree = util.parse.string(readData.objectAddressKanaFree) // 保険対象住所カナ
        outData.contractorName = util.parse.string(readData.contractorName) // 契約者氏名
        outData.contractorNameKana = util.parse.string(readData.contractorNameKana) // 契約者氏名カナ
        outData.contractorPost = util.parse.string(readData.contractorPost) // 契約者郵便番号
        outData.contractorAddressCode = util.parse.string(readData.contractorAddressCode) // 契約者住所コード
        outData.contractorAddress = util.parse.string(readData.contractorAddress) // 契約者住所
        outData.contractorAddressKana = util.parse.string(readData.contractorAddressKana) // 契約者住所カナ
        outData.contractorAddressFree = util.parse.string(readData.contractorAddressFree) // 契約者住所
        outData.contractorAddressKanaFree = util.parse.string(readData.contractorAddressKanaFree) // 契約者住所カナ
        outData.contractorTelArea = util.parse.string(readData.contractorTelArea) // 契約者電話番号ー市外
        outData.contractorTelCity = util.parse.string(readData.contractorTelCity) // 契約者電話番号ー市内
        outData.contractorTelNo = util.parse.string(readData.contractorTelNo) // 契約者電話番号ー加入番号
        outData.contractorTel2Area = util.parse.string(readData.contractorTel2Area) // 契約者電話番号2ー市外
        outData.contractorTel2City = util.parse.string(readData.contractorTel2City) // 契約者電話番号2ー市内
        outData.contractorTel2No = util.parse.string(readData.contractorTel2No) // 契約者電話番号2ー加入番号
        if (util.isEmptyOrUndef(readData.contractorMail) && !util.isEmptyOrUndef(readData.mail)) {
          outData.contractorMail = util.parse.string(readData.mail) // 契約者メールアドレス
        } else {
          outData.contractorMail = util.parse.string(readData.contractorMail) // 契約者メールアドレス
        }
        outData.promotionMailSendFlag = util.parse.int(readData.promotionMailSendFlag) // プロモーションメール送信フラグ
        outData.contractorSex = util.parse.int(readData.contractorSex) // 契約者性別
        outData.contractorBirthday = util.parse.string(readData.contractorBirthday) // 契約者生年月日
        outData.contractorIdentical = util.parse.int(readData.contractorIdentical) // 被保険者同異
        outData.insuredName = util.parse.string(readData.insuredName) // 被保険者氏名
        outData.insuredNameKana = util.parse.string(readData.insuredNameKaNa) // 被保険者氏名カナ
        outData.personalLiabilityName = util.parse.string(readData.personalLiabilityName) // 個人賠償補償対象者氏名
        outData.personalLiabilityNameKana = util.parse.string(readData.personalLiabilityNameKana) // 個人賠償補償対象者氏名カナ
        outData.tenantCompensationName = util.parse.string(readData.tenantCompensationName) // 借家賠償補償対象者氏名
        outData.tenantCompensationNameKana = util.parse.string(readData.tenantCompensationNameKana) // 借家賠償補償対象者氏名カナ
        outData.confirmContractor = util.parse.int(readData.confirmContractor) // 契約者・被保険者・保険対象所在地確認
        outData.confirmBuilding = util.parse.int(readData.confirmBuilding) // 保険の対象となる建物情報確認
        outData.confirmWithOtherAgree = util.parse.int(readData.confirmWithOtherAgree) // 他の保険契約等の有無確認
        outData.confirmTermPaymentMethod = util.parse.int(readData.confirmTermPaymentMethod) // 保険期間・保険料払込方法確認
        outData.confirmWithEarthquakeDiscount = util.parse.int(readData.confirmWithEarthquakeDiscount) // 地震保険加入有無・割引等確認
        outData.confirmCompensation = util.parse.int(readData.confirmCompensation) // 補償内容確認
        outData.confirmDisclosureStatement = util.parse.int(readData.confirmDisclosureStatement) // 重要事項説明書確認
        outData.confirmPrivacyProtection = util.parse.int(readData.confirmPrivacyProtection) // 個人情報取扱同意
        outData.confirmEarthquake = util.parse.int(readData.confirmEarthquake) // 地震保険確認
        outData.confirmSpecificationArticle = util.parse.int(readData.confirmSpecificationArticle) // 明記物件明細確認
        outData.confirmAgentShare = util.parse.int(readData.confirmAgentShare) // 代理店分担確認
        outData.confirmAccountTransfer = util.parse.int(readData.confirmAccountTransfer) // 口座情報確認
        outData.confirmRecruitment = util.parse.int(readData.confirmRecruitment) // 募集人情報確認
        outData.confirmOtherInfo = util.parse.int(readData.confirmOtherInfo) // その他確認
        outData.documentsConfirmMethod = util.parse.int(readData.documentsConfirmMethod) // 確認書類提出方法
        outData.contactField = util.parse.string(readData.contactField) // 訂正内容ご連絡欄
        outData.reviewRequestDate = util.parse.string(readData.reviewRequestDate) // 審査依頼日
        outData.confirmReviewedContractor = util.parse.int(readData.confirmReviewedContractor) // 審査後契約者・被保険者・保険対象所在地確認
        outData.confirmReviewedBuilding = util.parse.int(readData.confirmReviewedBuilding) // 審査後保険の対象となる建物情報確認
        outData.confirmWithReviewedOtherAgree = util.parse.int(readData.confirmWithReviewedOtherAgree) // 審査後他の保険契約等の有無確認
        outData.confirmReviewedTermPaymentMethod = util.parse.int(readData.confirmReviewedTermPaymentMethod) // 審査後保険期間・保険料払込方法確認
        outData.confirmWithReviewedEarthquakeDiscount = util.parse.int(readData.confirmWithReviewedEarthquakeDiscount) // 審査後地震保険加入有無・割引等確認
        outData.confirmReviewedCompensation = util.parse.int(readData.confirmReviewedCompensation) // 審査後補償内容確認
        outData.confirmReviewedDisclosureStatement = util.parse.int(readData.confirmReviewedDisclosureStatement) // 審査後重要事項説明書確認
        outData.confirmReviewedPrivacyProtection = util.parse.int(readData.confirmReviewedPrivacyProtection) // 審査後個人情報取扱同意
        outData.confirmReviewedEarthquake = util.parse.int(readData.confirmReviewedEarthquake) // 審査後地震保険確認
        outData.confirmReviewedAccountTransfer = util.parse.int(readData.confirmReviewedAccountTransfer) // 審査後口座情報確認
        outData.confirmReviewedAgent = util.parse.int(readData.confirmReviewedAgent) // 審査後代理店情報確認
        outData.confirmReviewedRecruitment = util.parse.int(readData.confirmReviewedRecruitment) // 審査後募集人情報確認
        outData.confirmReviewedOtherInfo = util.parse.int(readData.confirmReviewedOtherInfo) // 審査後その他確認
        outData.agentCode = util.parse.string(readData.agentCode) // 代理店コード
        outData.withOldContract = util.parse.int(readData.withOldContract) // 旧保険契約有無
        outData.fireBuildingFee = util.parse.senToMan(readData.fireBuildingFee) // 訂正前火災保険建物保険金額
        outData.fireHouseholdFee = util.parse.senToMan(readData.fireHouseholdFee) // 訂正前火災保険家財保険金額
        outData.earthquakeBuildingFee = util.parse.senToMan(readData.earthquakeBuildingFee) // 訂正前地震保険建物保険金額
        outData.earthquakeHouseholdFee = util.parse.senToMan(readData.earthquakeHouseholdFee) // 訂正前地震保険家財保険金額
        outData.totalFee = util.parse.senToMan(readData.totalFee)
        outData.withOldContract = util.parse.int(readData.withOldContract) // 旧保険契約有無
        outData.withOtherContract = util.parse.int(readData.withOtherContract) // 他保険契約有無
        outData.otherContractAmount = util.parse.int(readData.otherContractAmount) // 他契約保険金額
        // 試算
        outData.firePaymentMethod = util.parse.int(readData.firePaymentMethod) // 火災保険支払方法
        outData.earthquakePaymentMethod = util.parse.int(readData.earthquakePaymentMethod) // 地震保険支払方法

        // 内容確認追加で使用された
        outData.buildingUsage = util.parse.string(readData.buildingUsage)
        outData.withSpecificationArticleFireInsurance = util.parse.int(readData.withSpecificationArticleFireInsurance)
        outData.specificationArticleAmount = readData.specificationArticleAmount ? util.parse.senToMan(readData.specificationArticleAmount) : 0
        outData.specificationArticleFee = util.parse.int(readData.specificationArticleFee)
        outData.withEquipmentFireInsurance = util.parse.int(readData.withEquipmentFireInsurance)
        outData.equipmentAmount = readData.equipmentAmount ? util.parse.senToMan(readData.equipmentAmount) : 0
        outData.equipmentFee = util.parse.int(readData.equipmentFee)
        outData.withGoodsFireInsurance = util.parse.int(readData.withGoodsFireInsurance)
        outData.goodsAmount = readData.goodsAmount ? util.parse.senToMan(readData.goodsAmount) : 0
        outData.goodsFee = util.parse.int(readData.goodsFee)

        // // 申込情報画面で使用された
        // outData.advanceWithCorporationAgreement = util.parse.int(readData.advanceWithCorporationAgreement)
        // outData.freeWithCorporationAgreement = util.parse.int(readData.freeWithCorporationAgreement)

        // 他契約有無確認画面
        outData.rakutenSonpoFirst = util.parse.string(readData.rakutenSonpoFirst)
        outData.insuranceTypeKanaFirst = util.parse.string(readData.insuranceTypeKanaFirst)
        outData.insuranceCompanyKanaFirst = util.parse.string(readData.insuranceCompanyKanaFirst)
        outData.insuranceTargetFirst = util.parse.string(readData.insuranceTargetFirst)
        outData.basicInsuranceAmountFirst = util.parse.int(readData.basicInsuranceAmountFirst)
        outData.earthquakeInsuranceAmountFirst = util.parse.int(readData.earthquakeInsuranceAmountFirst)
        outData.dueDateFirst = util.parse.string(readData.dueDateFirst)
        outData.withSecondOtherContract = util.parse.int(readData.withSecondOtherContract)
        outData.rakutenSonpoSecond = util.parse.string(readData.rakutenSonpoSecond)
        outData.insuranceTypeKanaSecond = util.parse.string(readData.insuranceTypeKanaSecond)
        outData.insuranceCompanyKanaSecond = util.parse.string(readData.insuranceCompanyKanaSecond)
        outData.insuranceTargetSecond = util.parse.string(readData.insuranceTargetSecond)
        outData.basicInsuranceAmountSecond = util.parse.int(readData.basicInsuranceAmountSecond)
        outData.earthquakeInsuranceAmountSecond = util.parse.int(readData.earthquakeInsuranceAmountSecond)
        outData.dueDateSecond = util.parse.string(readData.dueDateSecond)

        // 申込情報画面
        // 契約種類
        outData.agreeType = util.parse.int(readData.agreeType)
        // 法人コード・前
        outData.corporateCodeBefore = util.parse.string(readData.corporateCodeBefore)
        // 法人コード・後
        outData.corporateCodeAfter = util.parse.string(readData.corporateCodeAfter)
        // 代表者氏名
        outData.representativeName = util.parse.string(readData.representativeName)
        // 代表者氏名（カナ）
        outData.representativeNameKana = util.parse.string(readData.representativeNameKana)
        // 契約者メールアドレス(確認)
        outData.contractorMailConfirm = util.parse.string(readData.contractorMailConfirm)
        // ご契約者と個人賠償の本人の同異
        // 個人賠償補償同異
        outData.personalLiabilityIdentical = util.parse.int(readData.personalLiabilityIdentical)
        // ご契約者と借家人賠償の本人の同異
        // 借家賠償補償同異
        outData.tenantLiabilityIdentical = util.parse.int(readData.tenantLiabilityIdentical)
        // 補正課所コード
        outData.correctionOfficeCode = util.parse.string(readData.correctionOfficeCode)
        // 補正割合
        outData.correctionRatio = util.parse.string(readData.correctionRatio)
        // 質権設定
        outData.withPledge = util.parse.int(readData.withPledge)
        // 住宅支援機構融資
        outData.houseSupportFinancing = util.parse.int(readData.houseSupportFinancing)
        // 抵当権者特約
        outData.withMortgageContract = util.parse.int(readData.withMortgageContract)
        // 自己特定
        outData.selfSpecific = util.parse.int(readData.selfSpecific)
        // 代理店特記事項（カナ）
        outData.agentNotesKana = util.parse.string(readData.agentNotesKana)
        // 領収ハガキ
        outData.noneReceptPostcard = util.parse.int(readData.noneReceptPostcard)
        // 旧証券番号
        outData.oldPolicyNo = util.parse.string(readData.oldPolicyNo)
        // 証券郵送選択
        outData.policyMailingSelection = util.parse.int(readData.policyMailingSelection)

        outData.buildingLoan = util.parse.int(readData.jyulonRiyo) // 住宅ローン有無
        // 旧証券番号枝番
        outData.oldPolicyNoBranch = util.parse.string(readData.oldPolicyNoBranch)
        // 担当者コード
        outData.agentManagerCode = util.parse.string(readData.agentManagerCode)
        // 営業課店名
        outData.sectionName = util.parse.string(readData.salesName)
        // G-NHA-010_内容確認
        // 募集人ID
        outData.recruitmentID = util.parse.string(readData.recruitmentID)
        // 募集人名
        outData.recruitmentName = util.parse.string(readData.recruitmentName)
        // 明記物件明細有無
        outData.withSpecificationArticleDetail = util.parse.string(readData.withSpecificationArticleDetail)

        // G-NHA-033_内容確認(審査後)
        // 代理店名
        outData.agentName = util.parse.string(readData.agentName)

        // 住所コードが数値変換されて9桁になる可能性があるので、10桁に補正
        if (outData.objectAddressCode && outData.objectAddressCode.length === 9) {
          outData.objectAddressCode = '0' + outData.objectAddressCode
        }
        if (outData.contractorAddressCode && outData.contractorAddressCode.length === 9) {
          outData.contractorAddressCode = '0' + outData.contractorAddressCode
        }

        // 代理店分担入力画面
        outData.salesCode = util.parse.string(readData.salesCode) // 課店コード
        outData.selfSpecific = util.parse.int(readData.selfSpecific) // 自分特定
        outData.noneManagerStoreCode1 = util.parse.string(readData.noneManagerStoreCode1) // 非幹事課店コード１
        outData.noneManagerAgentCode1 = util.parse.string(readData.noneManagerAgentCode1) // 非幹事代理店コード１
        outData.noneManagerSelfSpecific1 = util.parse.int(readData.noneManagerSelfSpecific1) // 非幹事自分特定１
        outData.noneManagerProportion1 = util.parse.float(readData.noneManagerProportion1) // 非幹事割合１
        outData.noneManagerStoreCode2 = util.parse.string(readData.noneManagerStoreCode2) // 非幹事課店コード２
        outData.noneManagerAgentCode2 = util.parse.string(readData.noneManagerAgentCode2) // 非幹事代理店コード２
        outData.noneManagerSelfSpecific2 = util.parse.int(readData.noneManagerSelfSpecific2) // 非幹事自分特定２
        outData.noneManagerProportion2 = util.parse.float(readData.noneManagerProportion2) // 非幹事割合２

        // 口座情報入力情報
        outData.bankType = util.parse.int(readData.bankKbn)
        if (util.parse.int(readData.financialInstitutionCode) === 0) {
          outData.financialInstitutionCode = null
        } else {
          // outData.financialInstitutionCode = util.parse.int(readData.financialInstitutionCode)
          outData.financialInstitutionCode = readData.financialInstitutionCode
        }
        if (util.parse.int(readData.branchNumber) === 0) {
          outData.shopNo = null
        } else {
          // outData.shopNo = util.parse.int(readData.branchNumber)
          outData.shopNo = readData.branchNumber
        }
        outData.subject = util.parse.int(readData.subject)
        if (util.isEmptyOrUndef(readData.accountNumber) || (util.parse.int(readData.accountNumber) === 0)) {
          outData.accountNo = null
        } else {
          outData.accountNo = ('0000000' + util.parse.string(readData.accountNumber).trim()).slice(-7)
        }
        outData.accountHolderKana = util.parse.string(readData.accountNameKana)
        console.log(util.parse.string(readData.accountNameKana))
        if (util.parse.string(readData.symbolYutyo) === '0') {
          outData.sign = null
        } else {
          outData.sign = util.parse.string(readData.symbolYutyo)
        }
        if (util.isEmptyOrUndef(readData.numberYutyo) || (util.parse.string(readData.numberYutyo) === '0')) {
          outData.number = null
        } else {
          outData.number = ('00000000' + util.parse.string(readData.numberYutyo).trim()).slice(-8)
        }
        console.log(util.parse.string(readData.accountNameKana))
        if (outData.bankType === 1) {
          outData.transferredNotification = util.parse.int(readData.transferNotice)
        }
        if (outData.bankType === 2) {
          outData.transferredNotificationYutyo = util.parse.int(readData.transferNotice)
        }
        outData.accountHolderKanaYutyo = util.parse.string(readData.accountNameKana)
        // 内容確認画面で追加
        outData.buildingUsage = util.parse.string(readData.buildingUsage) // 建物用法
        outData.jobWorkType = util.parse.int(readData.jobWorkType) // 職作業分類
        outData.jobWork = util.parse.int(readData.jobWork) // 職作業
        outData.severeAlleviationMasure = util.parse.int(readData.severeAlleviationMasure) // 激変緩和措置
        outData.allUnits = util.parse.string(readData.allUnits) // 全戸数

        // 口座名義人(漢字)
        outData.accountHolderKanji = util.parse.string(readData.accountHolderKanji)
        outData.accountHolderKanjiYutyo = util.parse.string(readData.accountHolderKanjiYutyo)
        console.log(util.parse.string(readData.accountHolderKanji))
        console.log(util.parse.string(readData.accountHolderKanjiYutyo))
        // 依頼書取付省略
        outData.requestFormInstallationOmission = util.parse.int(readData.requestFormInstallationOmission)
        // 初回口振
        outData.firstAccountTransfer = util.parse.int(readData.firstAccountTransfer)
        // フリープラン火災等危険のみ補償特約有無
        outData.freeWithFireOnlyCompensation = util.parse.int(readData.freeWithFireOnlyCompensation)
        // おすすめプラン火災等危険のみ補償特約有無
        outData.advanceWithFireOnlyCompensation = util.parse.int(readData.advanceWithFireOnlyCompensation)
        // 耐火性能郵送フラグ
        outData.fireResistanceMailingFlag = util.parse.int(readData.fireResistanceMailingFlag)
        // 地震割引郵送フラグ
        outData.earthquakeDiscountMailingFlag = util.parse.int(readData.earthquakeDiscountMailingFlag)
        outData.equipmentFee = util.parse.int(readData.equipmentFee) // 設備什器保険料
        outData.goodsFee = util.parse.int(readData.goodsFee) // 商品製品保険料
        outData.specificationArticleFee = util.parse.int(readData.specificationArticleFee) // 明記物件保険料
        // 建物管理賠責保険料
        outData.buildingManageLiabilityFee = util.parse.int(readData.buildingManageLiabilityFee)
        // Policy
        outData.policy = readData.policyNo ? readData.policyNo : state.data.policy
        // 制限コード
        outData.restrictionCode = readData.restrictionCode
        outData.decisionNo = readData.decisionNo
        return outData
      }
      const adjustFileList = (readData) => {
        if (readData === undefined || readData === null) {
          return []
        }

        const outData = []
        for (const key in readData) {
          const item = readData[key]
          outData.push({
            fileId: util.parse.string(item.fileId),
            fileName: util.parse.string(item.fileName),
            fileType: util.parse.int(item.fileType),
            docType: util.parse.string(item.docType),
            withInsurancePolicyDiscountDescription: util.parse.int(item.withInsurancePolicyDiscountDescription),
            thumbnail: util.parse.string(item.thumbnail)
          })
        }

        return outData
      }

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0001_API.getReadEntryTempSave(request)
        .then(response => {
          const data = adjustData(response.data.data)
          data.mail = request.mail
          const dataBeforeCorrection = adjustData(response.data.dataBeforeCorrection)
          const dataAppraisal = adjustData(response.data.dataAppraisal)

          const fileList = adjustFileList(response.data.fileList)
          const alertInfo = response.data.alertInfo || []
          const alertInfoHash = {}
          alertInfo.forEach((item, index) => {
            const key = item.parametersName
            alertInfoHash[key] = item
          })

          // APIから申込データを読み込んだ時のみ算出
          data.isCheckedStatus = data.entryStatus >= 4

          // 保険始期日エラーの場合、修正範囲に使うために修正始期日保持
          console.log('response.data.alertInfo', response.data.alertInfo)
          if ((response.data.alertInfo !== null) && (response.data.alertInfo !== undefined) && (response.data.alertInfo.length > 0)) {
            data.newStartDateMin = data.startDate
          }

          // storeに保存
          dispatch(ACTIONS.MYAPP_CLEAR)
          dispatch(ACTIONS.MYAPP_SAVE, data)
          dispatch(ACTIONS.MYAPP_SET_ESTIMATE_PLAN)
          commit(MUTATIONS.MYAPP_SET_BEFORE_CORRECTION, dataBeforeCorrection)
          commit(MUTATIONS.MYAPP_SET_DATA_APPRAISAL, dataAppraisal)
          commit(MUTATIONS.MYAPP_SET_UPLOAD_FILE_INFO, fileList)
          commit(MUTATIONS.MYAPP_SET_ALERT_INFO, alertInfoHash)
          // 引受制限reopen時、制限コードと決定番号をクリアする
          // commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 申込の入力データを一時保存
     */
    async [ACTIONS.MYAPP_SVR_ENTRY_SAVE] ({ state, dispatch, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ENTRY_SAVE

      // 送信データの調整関数
      const adjustData = (saveData) => {
        const outData = {}
        outData.mytoken = util.parse.string(saveData.mytoken) // MyToken
        outData.screenID = util.parse.string(saveData.screenID) // 一時保存画面ID
        outData.entryNo = util.parse.string(saveData.entryNo) // entryNo
        outData.topAgentCode = util.parse.string(this.state.configs.agentCode)
        outData.updateTime = util.parse.string(saveData.updateTime) // updateTime
        outData.entryStatus = util.parse.string(saveData.entryStatus) // 申込ステータス
        outData.entryType = util.parse.string(saveData.entryType) // 申込区分
        outData.paymentType = util.parse.string(saveData.paymentType) // 支払区分
        outData.startDate = util.parse.string(saveData.startDate) // 保険始期日
        outData.fireEndDate = util.parse.string(saveData.fireEndDate) // 火災保険終期日
        outData.buildingOwnership = util.parse.string(saveData.buildingOwnership) // 建物所有関係
        outData.buildingFrom = util.parse.string(saveData.buildingFrom) // 建物形態
        outData.buildingFloor = util.parse.string(saveData.buildingFloor) // 建物階数
        outData.basementFloor = util.parse.string(saveData.basementFloor) // 地下階数
        outData.residentialFloor = util.parse.string(saveData.residentialFloor) // 居住階数
        outData.buildingStructure = util.parse.string(saveData.buildingStructure) // 建物構造
        outData.steelBuildingType = util.parse.string(saveData.steelBuildingType) // 鉄骨造建物種類詳細
        outData.otherBuildingType = util.parse.string(saveData.otherBuildingType) // その他建物種類詳細
        outData.structureGrade = util.parse.string(saveData.structureGrade) // 構造級別
        outData.structureConfirmed = util.parse.string(saveData.structureConfirmed) // 構造確認済み
        outData.buildingLocation = util.parse.string(saveData.buildingLocation) // 建物所在地
        outData.buildingBuildingDate = util.parse.string(saveData.buildingDate) // 建物建築年月
        outData.buildingArea = util.parse.string(saveData.buildingArea) // 建物面積
        outData.documentsConfirmed = util.parse.string(saveData.documentsConfirmed) // 書類提出確認済み
        outData.withBuildingFireInsurance = util.parse.string(saveData.withBuildingFireInsurance) // 建物火災保険加入有無
        outData.withNewBuildingValueKnown = util.parse.string(saveData.withNewBuildingValueKnown) // 新築時の建築価額通知有無
        outData.policyCurrentReplacementValue = util.parse.manToSenString(saveData.policyCurrentReplacementValue) // 協定再調達価額
        outData.policyCurrentReplacementValueMin = util.parse.manToSenString(saveData.policyCurrentReplacementValueMin) // 協定再調達価額Min
        outData.policyCurrentReplacementValueMax = util.parse.manToSenString(saveData.policyCurrentReplacementValueMax) // 協定再調達価額Max
        outData.fenceValue = util.parse.string(saveData.fenceValue) // 門・塀・車庫価額
        outData.newBuildingValue = util.parse.manToSenString(saveData.newBuildingValue) // 新築時の建築価額
        outData.apartmentClassification = util.parse.string(saveData.apartmentClassification) // マンション評価基準
        outData.withHouseholdFireInsurance = util.parse.string(saveData.withHouseholdFireInsurance) // 家財火災保険加入有無
        outData.householderAge = util.parse.string(saveData.householderAge) // 世帯主年令
        outData.numberOfChildren = util.parse.string(saveData.numberOfChildren) // 子供人数
        outData.withSpouse = util.parse.string(saveData.withSpouse) // 配偶者有無
        outData.housemates = util.parse.string(saveData.housemates) // 同居人人数
        outData.buildingAppraisedLower = util.parse.manToSenString(saveData.buildingAppraisedLower) // 建物評価額（下限）
        outData.buildingAppraisedUpper = util.parse.manToSenString(saveData.buildingAppraisedUpper) // 建物評価額（上限）
        outData.householdAppraisedLower = util.parse.manToSenString(saveData.householdAppraisedLower) // 家財評価額（下限）
        outData.householdAppraisedUpper = util.parse.manToSenString(saveData.householdAppraisedUpper) // 家財評価額（上限）
        outData.withBuildingEarthquakeInsurance = util.parse.string(saveData.withBuildingEarthquakeInsurance) // 建物地震保険加入有無
        outData.withHouseholdEarthquakeInsurance = util.parse.string(saveData.withHouseholdEarthquakeInsurance) // 家財地震保険加入有無
        outData.confirmEarthquakeDiscount = util.parse.string(saveData.confirmEarthquakeDiscount) // 地震保険割引確認
        outData.earthquakeInsuranceDiscountPercent = util.parse.string(saveData.earthquakeInsuranceDiscountPercent) // 地震保険割引率
        outData.seismicGradeDiscountGrade = util.parse.string(saveData.seismicGradeDiscountGrade) // 耐震等級割引等級
        outData.seismicDiagnosisDate = util.parse.string(saveData.seismicDiagnosisDate) // 耐震診断年月日
        outData.buildingDateConfirmed = util.parse.string(saveData.buildingDateConfirmed) // 建築年月確認済み
        outData.discountCertificateConfirmed = util.parse.string(saveData.discountCertificateConfirmed) // 割引証明書類注意事項確認済み
        outData.includFoundationWork = util.parse.string(saveData.includFoundationWork) // 基礎工事含む
        outData.includJoinery = util.parse.string(saveData.includJoinery) // 畳・建具等含む
        outData.includFence = util.parse.string(saveData.includFence) // 門・塀・垣含む
        outData.includGarage = util.parse.string(saveData.includGarage) // 物置車庫等含む
        outData.includShared = util.parse.string(saveData.includShared) // 共用部分含む
        outData.fireTerm = util.parse.int(saveData.fireTerm) // 火災保険期間
        outData.earthquakeTerm = util.parse.int(saveData.earthquakeTerm) // 地震保険期間
        outData.earthquakeAutomaticContinuation = util.parse.string(saveData.earthquakeAutomaticContinuation) // 地震自動継続
        outData.selectPlan = util.parse.string(saveData.selectPlan) // 選択プラン
        outData.advanceWithFireCompensation = util.parse.string(saveData.advanceWithFireCompensation) // おすすめプラン火災・落雷・破裂・爆発補償有無
        outData.advanceWithWindCompensation = util.parse.string(saveData.advanceWithWindCompensation) // おすすめプラン風災・ひょう災・雪災補償有無
        outData.advanceWindCopayment = util.parse.manToSenString(saveData.advanceWindCopayment) // おすすめプラン風災・ひょう災・雪災自己負担額
        outData.advanceWithWaterCompensation = util.parse.string(saveData.advanceWithWaterCompensation) // おすすめプラン水災補償有無
        outData.advanceWithWaterStainedCompensation = util.parse.string(saveData.advanceWithWaterStainedCompensation) // おすすめプラン水濡れ・盗難補償有無
        outData.advanceWithCorruptionCompensation = util.parse.string(saveData.advanceWithCorruptionCompensation) // おすすめプラン破損・汚損等補償有無
        outData.advanceCorruptionCopayment = util.parse.manToSenString(saveData.advanceCorruptionCopayment) // おすすめプラン破損・汚損等自己負担額
        outData.advanceCorruptionHouseholdLimited = util.parse.manToSenString(saveData.advanceCorruptionHouseholdLimited) // おすすめプラン破損・汚損等家財支払限度額
        outData.advanceWithDisasterExpensesCompensation = util.parse.string(saveData.advanceWithDisasterExpensesCompensation) // おすすめプラン災害時諸費用補償有無
        outData.advanceDisasterExpensesLimited = util.parse.string(saveData.advanceDisasterExpensesLimited) // おすすめプラン災害時諸費用支払限度額
        outData.advanceWithEarthquakeCompensationBuilding = util.parse.string(saveData.advanceWithEarthquakeCompensationBuilding) // おすすめプラン地震・噴火・津波補償有無（建物）
        outData.advanceWithEarthquakeCompensationHousehold = util.parse.string(saveData.advanceWithEarthquakeCompensationHousehold) // おすすめプラン地震・噴火・津波補償有無（家財）
        outData.advanceWithExpenseCompensation = util.parse.string(saveData.advanceWithExpenseCompensation) // おすすめプラン費用保険金補償有無
        outData.advanceWithPersonalLiability = util.parse.string(saveData.advanceWithPersonalLiability) // おすすめプラン個人賠償責任補償特約有無
        outData.advanceWithTenantLiability = util.parse.string(saveData.advanceWithTenantLiability) // おすすめプラン借家人賠償責任補償特約有無
        outData.advanceTenantLiabilityLimited = util.parse.string(saveData.advanceTenantLiabilityLimited) // おすすめプラン借家人賠償責任補償特約支払限度額
        outData.advanceWithBuildingManageLiability = util.parse.string(saveData.advanceWithBuildingManageLiability) // おすすめプラン建物管理賠償責任補償特約有無
        outData.advanceBuildingManageLiabilityLimited = util.parse.string(saveData.advanceBuildingManageLiabilityLimited) // おすすめプラン建物管理賠償責任補償特約支払限度額
        outData.advanceWithExposureCompensation = util.parse.string(saveData.advanceWithExposureCompensation) // おすすめプラン類焼損害補償特約有無
        outData.advanceWithRebuildingCostCompensation = util.parse.string(saveData.advanceWithRebuildingCostCompensation) // おすすめプラン建替費用補償特約有無
        outData.advanceWithCommonRepairCostCompensation = util.parse.string(saveData.advanceWithCommonRepairCostCompensation) // おすすめプラン共用部分修理費用補償特約有無
        outData.advanceWithCrimeCostCompensation = util.parse.string(saveData.advanceWithCrimeCostCompensation) // おすすめプラン防犯対策費用補償特約有無
        outData.advanceWithCorbelHouseholdCompensation = util.parse.string(saveData.advanceWithCorbelHouseholdCompensation) // おすすめプラン持ち出し家財補償特約有無
        outData.advanceWithMovingCompensation = util.parse.string(saveData.advanceWithMovingCompensation) // おすすめプラン引越し中の損害補償特約有無
        outData.freeWithFireCompensation = util.parse.string(saveData.freeWithFireCompensation) // フリープラン火災・落雷・破裂・爆発補償有無
        outData.freeWithWindCompensation = util.parse.string(saveData.freeWithWindCompensation) // フリープラン風災・ひょう災・雪災補償有無
        outData.freeWindCopayment = util.parse.manToSenString(saveData.freeWindCopayment) // フリープラン風災・ひょう災・雪災自己負担額
        outData.freeWithWaterCompensation = util.parse.string(saveData.freeWithWaterCompensation) // フリープラン水災補償有無
        outData.freeWithWaterStainedCompensation = util.parse.string(saveData.freeWithWaterStainedCompensation) // フリープラン水濡れ・盗難補償有無
        outData.freeWithCorruptionCompensation = util.parse.string(saveData.freeWithCorruptionCompensation) // フリープラン破損・汚損等補償有無
        outData.freeCorruptionCopayment = util.parse.manToSenString(saveData.freeCorruptionCopayment) // フリープラン破損・汚損等自己負担額
        outData.freeCorruptionHouseholdLimited = util.parse.manToSenString(saveData.freeCorruptionHouseholdLimited) // フリープラン破損・汚損等家財支払限度額
        outData.freeWithEarthquakeCompensationBuilding = util.parse.string(saveData.freeWithEarthquakeCompensationBuilding) // フリープラン地震・噴火・津波補償有無（建物）
        outData.freeWithEarthquakeCompensationHousehold = util.parse.string(saveData.freeWithEarthquakeCompensationHousehold) // フリープラン地震・噴火・津波補償有無（家財）
        outData.freeWithDisasterExpensesCompensation = util.parse.string(saveData.freeWithDisasterExpensesCompensation) // フリープラン災害時諸費用補償有無
        outData.freeDisasterExpensesLimited = util.parse.string(saveData.freeDisasterExpensesLimited) // フリープラン災害時諸費用支払限度額
        outData.freeWithExpenseCompensation = util.parse.string(saveData.freeWithExpenseCompensation) // フリープラン費用保険金補償有無
        outData.freeWithPersonalLiability = util.parse.string(saveData.freeWithPersonalLiability) // フリープラン個人賠償責任補償特約有無
        outData.freeWithTenantLiability = util.parse.string(saveData.freeWithTenantLiability) // フリープラン借家人賠償責任補償特約有無
        outData.freeTenantLiabilityLimited = util.parse.string(saveData.freeTenantLiabilityLimited) // フリープラン借家人賠償責任補償特約支払限度額
        outData.freeWithBuildingManageLiability = util.parse.string(saveData.freeWithBuildingManageLiability) // フリープラン建物管理賠償責任補償特約有無
        outData.freeBuildingManageLiabilityLimited = util.parse.string(saveData.freeBuildingManageLiabilityLimited) // フリープラン建物管理賠償責任補償特約支払限度額
        outData.freeWithExposureCompensation = util.parse.string(saveData.freeWithExposureCompensation) // フリープラン類焼損害補償特約有無
        outData.freeWithRebuildingCostCompensation = util.parse.string(saveData.freeWithRebuildingCostCompensation) // フリープラン建替費用補償特約有無
        outData.freeWithCommonRepairCostCompensation = util.parse.string(saveData.freeWithCommonRepairCostCompensation) // フリープラン共用部分修理費用補償特約有無
        outData.freeWithCrimeCostCompensation = util.parse.string(saveData.freeWithCrimeCostCompensation) // フリープラン防犯対策費用補償特約有無
        outData.freeWithCorbelHouseholdCompensation = util.parse.string(saveData.freeWithCorbelHouseholdCompensation) // フリープラン持ち出し家財補償特約有無
        outData.freeWithMovingCompensation = util.parse.string(saveData.freeWithMovingCompensation) // フリープラン引越し中の損害補償特約有無

        // 申込情報画面用
        outData.withPersonalLiability = util.parse.int(saveData.withPersonalLiability) // 個人賠償責任補償特約有無
        outData.withTenantLiability = util.parse.int(saveData.withTenantLiability) // 借家人賠償責任補償特約有無

        outData.fireBuildingAmount = util.parse.manToSenString(saveData.fireBuildingAmount) // 火災保険建物保険金額
        outData.otherMethodAmount = util.parse.manToSenString(saveData.otherMethodAmount) // 火災保険建物保険金額(そのた)
        outData.fireHouseholdAmount = util.parse.manToSenString(saveData.fireHouseholdAmount) // 火災保険家財保険金額
        outData.earthquakeBuildingAmount = util.parse.manToSenString(saveData.earthquakeBuildingAmount) // 地震保険建物保険金額
        outData.earthquakeBuildingAmountLower = util.parse.manToSenString(saveData.earthquakeBuildingAmountLower) // 建物の地震保険保険金額（下限）
        outData.earthquakeBuildingAmountUpper = util.parse.manToSenString(saveData.earthquakeBuildingAmountUpper) // 建物の地震保険保険金額（上限）
        outData.earthquakeHouseholdAmount = util.parse.manToSenString(saveData.earthquakeHouseholdAmount) // 地震保険家財保険金額
        outData.earthquakeHouseholdAmountLower = util.parse.manToSenString(saveData.earthquakeHouseholdAmountLower) // 家財の地震保険保険金額（下限）
        outData.earthquakeHouseholdAmountUpper = util.parse.manToSenString(saveData.earthquakeHouseholdAmountUpper) // 家財の地震保険保険金額（上限）
        outData.advanceFireBuildingFee = util.parse.string(saveData.advanceFireBuildingFee) // おすすめプラン火災保険建物保険料
        outData.advanceFireHouseholdFee = util.parse.string(saveData.advanceFireHouseholdFee) // おすすめプラン火災保険家財保険料
        outData.advanceFireFee = util.parse.string(saveData.advanceFireFee) // おすすめプラン火災保険料
        outData.advanceEarthquakeBuildingFee = util.parse.string(saveData.advanceEarthquakeBuildingFee) // おすすめプラン地震保険建物保険料
        outData.advanceEarthquakeHouseholdFee = util.parse.string(saveData.advanceEarthquakeHouseholdFee) // おすすめプラン地震保険家財保険料
        outData.advanceEarthquakeFee = util.parse.string(saveData.advanceEarthquakeFee) // おすすめプラン地震保険料
        outData.advanceTotalFee = util.parse.string(saveData.advanceTotalFee) // おすすめプラン合計保険料
        outData.advanceEquipmentFee = util.parse.string(saveData.equipmentFee) // 設備什器保険料
        outData.advanceGoodsFee = util.parse.string(saveData.advanceGoodsFee) // 商品製品保険料
        outData.advanceSpecificationArticleFee = util.parse.string(saveData.advanceSpecificationArticleFee) // 明記物件保険料
        outData.advancePersonalLiabilityFee = util.parse.string(saveData.advancePersonalLiabilityFee) // 個人賠償保険料
        outData.advanceTenantLiabilityFee = util.parse.string(saveData.advanceTenantLiabilityFee) // 借家人賠償保険料
        outData.advanceExposureFee = util.parse.string(saveData.advanceExposureFee) // 類焼保険料

        outData.freeFireBuildingFee = util.parse.string(saveData.freeFireBuildingFee) // フリープラン火災保険建物保険料
        outData.freeFireHouseholdFee = util.parse.string(saveData.freeFireHouseholdFee) // フリープラン火災保険家財保険料
        outData.freeFireFee = util.parse.string(saveData.freeFireFee) // フリープラン火災保険料
        outData.freeEarthquakeBuildingFee = util.parse.string(saveData.freeEarthquakeBuildingFee) // フリープラン地震保険建物保険料
        outData.freeEarthquakeHouseholdFee = util.parse.string(saveData.freeEarthquakeHouseholdFee) // フリープラン地震保険家財保険料
        outData.freeEarthquakeFee = util.parse.string(saveData.freeEarthquakeFee) // フリープラン地震保険料
        outData.freeTotalFee = util.parse.string(saveData.freeTotalFee) // フリープラン合計保険料
        outData.freeEquipmentFee = util.parse.string(saveData.equipmentFee) // 設備什器保険料
        outData.freeGoodsFee = util.parse.string(saveData.freeGoodsFee) // 商品製品保険料
        outData.freeSpecificationArticleFee = util.parse.string(saveData.freeSpecificationArticleFee) // 明記物件保険料
        outData.freePersonalLiabilityFee = util.parse.string(saveData.freePersonalLiabilityFee) // 個人賠償保険料
        outData.freeTenantLiabilityFee = util.parse.string(saveData.freeTenantLiabilityFee) // 借家人賠償保険料
        outData.freeExposureFee = util.parse.string(saveData.freeExposureFee) // 類焼保険料

        outData.objectAddressSame = util.parse.string(saveData.objectAddressSame) // 保険対象住所同異
        outData.objectYubin = util.parse.string(saveData.objectYubin) // 保険対象郵便番号
        outData.objectAddressCode = util.parse.string(saveData.objectAddressCode) // 保険対象住所コード
        outData.objectAddress = util.parse.string(saveData.objectAddress) // 保険対象住所
        outData.objectAddressKana = util.parse.string(saveData.objectAddressKana) // 保険対象住所カナ
        outData.objectAddressFree = util.parse.string(saveData.objectAddressFree) // 保険対象住所
        outData.objectAddressKanaFree = util.parse.string(saveData.objectAddressKanaFree) // 保険対象住所カナ
        outData.contractorName = util.parse.string(saveData.contractorName) // 契約者氏名
        outData.contractorNameKana = util.parse.string(saveData.contractorNameKana) // 契約者氏名カナ
        outData.contractorPost = util.parse.string(saveData.contractorPost) // 契約者郵便番号
        outData.contractorAddressCode = util.parse.string(saveData.contractorAddressCode) // 契約者住所コード
        outData.contractorAddress = util.parse.string(saveData.contractorAddress) // 契約者住所
        outData.contractorAddressKana = util.parse.string(saveData.contractorAddressKana) // 契約者住所カナ
        outData.contractorAddressFree = util.parse.string(saveData.contractorAddressFree) // 契約者住所
        outData.contractorAddressKanaFree = util.parse.string(saveData.contractorAddressKanaFree) // 契約者住所カナ
        outData.contractorTelArea = util.parse.string(saveData.contractorTelArea) // 契約者電話番号ー市外
        outData.contractorTelCity = util.parse.string(saveData.contractorTelCity) // 契約者電話番号ー市内
        outData.contractorTelNo = util.parse.string(saveData.contractorTelNo) // 契約者電話番号ー加入番号
        outData.contractorTel2Area = util.parse.string(saveData.contractorTel2Area) // 契約者電話番号2ー市外
        outData.contractorTel2City = util.parse.string(saveData.contractorTel2City) // 契約者電話番号2ー市内
        outData.contractorTel2No = util.parse.string(saveData.contractorTel2No) // 契約者電話番号2ー加入番号
        outData.contractorMail = util.parse.string(saveData.contractorMail) // 契約者メールアドレス
        outData.promotionMailSendFlag = util.parse.int(saveData.promotionMailSendFlag) // プロモーションメール送信フラグ
        outData.contractorSex = util.parse.string(saveData.contractorSex) // 契約者性別
        outData.contractorBirthday = util.parse.string(saveData.contractorBirthday) // 契約者生年月日
        outData.contractorIdentical = util.parse.string(saveData.contractorIdentical) // 被保険者同異
        outData.insuredName = util.parse.string(saveData.insuredName) // 被保険者氏名
        outData.insuredNameKaNa = util.parse.string(saveData.insuredNameKana) // 被保険者氏名カナ
        outData.personalLiabilityName = util.parse.string(saveData.personalLiabilityName) // 個人賠償補償対象者氏名
        outData.personalLiabilityNameKana = util.parse.string(saveData.personalLiabilityNameKana) // 個人賠償補償対象者氏名カナ
        outData.tenantCompensationName = util.parse.string(saveData.tenantCompensationName) // 借家賠償補償対象者氏名
        outData.tenantCompensationNameKana = util.parse.string(saveData.tenantCompensationNameKana) // 借家賠償補償対象者氏名カナ
        outData.confirmContractor = util.parse.string(saveData.confirmContractor) // 契約者・被保険者・保険対象所在地確認
        outData.confirmBuilding = util.parse.string(saveData.confirmBuilding) // 保険の対象となる建物情報確認
        outData.confirmWithOtherAgree = util.parse.string(saveData.confirmWithOtherAgree) // 他の保険契約等の有無確認
        outData.confirmTermPaymentMethod = util.parse.string(saveData.confirmTermPaymentMethod) // 保険期間・保険料払込方法確認
        outData.confirmWithEarthquakeDiscount = util.parse.string(saveData.confirmWithEarthquakeDiscount) // 地震保険加入有無・割引等確認
        outData.confirmCompensation = util.parse.string(saveData.confirmCompensation) // 補償内容確認
        outData.confirmDisclosureStatement = util.parse.string(saveData.confirmDisclosureStatement) // 重要事項説明書確認
        outData.confirmPrivacyProtection = util.parse.string(saveData.confirmPrivacyProtection) // 個人情報取扱同意
        outData.confirmEarthquake = util.parse.string(saveData.confirmEarthquake) // 地震保険確認
        outData.confirmSpecificationArticle = util.parse.int(saveData.confirmSpecificationArticle) // 明記物件明細確認
        outData.confirmAgentShare = util.parse.int(saveData.confirmAgentShare) // 代理店分担確認
        outData.confirmAccountTransfer = util.parse.string(saveData.confirmAccountTransfer) // 口座情報確認
        outData.confirmRecruitment = util.parse.string(saveData.confirmRecruitment) // 募集人情報確認
        outData.confirmOtherInfo = util.parse.string(saveData.confirmOtherInfo) // その他確認
        outData.documentsConfirmMethod = util.parse.string(saveData.documentsConfirmMethod) // 確認書類提出方法
        outData.contactField = util.parse.string(saveData.contactField) // 訂正内容ご連絡欄
        outData.reviewRequestDate = util.parse.string(saveData.reviewRequestDate) // 審査依頼日
        outData.confirmReviewedContractor = util.parse.string(saveData.confirmReviewedContractor) // 審査後契約者・被保険者・保険対象所在地確認
        outData.confirmReviewedBuilding = util.parse.string(saveData.confirmReviewedBuilding) // 審査後保険の対象となる建物情報確認
        outData.confirmWithReviewedOtherAgree = util.parse.string(saveData.confirmWithReviewedOtherAgree) // 審査後他の保険契約等の有無確認
        outData.confirmReviewedTermPaymentMethod = util.parse.string(saveData.confirmReviewedTermPaymentMethod) // 審査後保険期間・保険料払込方法確認
        outData.confirmWithReviewedEarthquakeDiscount = util.parse.string(saveData.confirmWithReviewedEarthquakeDiscount) // 審査後地震保険加入有無・割引等確認
        outData.confirmReviewedCompensation = util.parse.string(saveData.confirmReviewedCompensation) // 審査後補償内容確認
        outData.confirmReviewedDisclosureStatement = util.parse.string(saveData.confirmReviewedDisclosureStatement) // 審査後重要事項説明書確認
        outData.confirmReviewedPrivacyProtection = util.parse.string(saveData.confirmReviewedPrivacyProtection) // 審査後個人情報取扱同意
        outData.confirmReviewedEarthquake = util.parse.string(saveData.confirmReviewedEarthquake) // 審査後地震保険確認
        outData.confirmReviewedAccountTransfer = util.parse.string(saveData.confirmReviewedAccountTransfer) // 審査後口座情報確認
        outData.confirmReviewedAgent = util.parse.string(saveData.confirmReviewedAgent) // 審査後代理店情報確認
        outData.confirmReviewedRecruitment = util.parse.string(saveData.confirmReviewedRecruitment) // 審査後募集人情報確認
        outData.confirmReviewedOtherInfo = util.parse.string(saveData.confirmReviewedOtherInfo) // 審査後その他確認
        outData.withOldContract = util.parse.string(saveData.withOldContract) // 旧保険契約有無
        outData.fireBuildingFee = util.parse.manToSenString(saveData.fireBuildingFee) // 訂正前火災保険建物保険金額
        outData.fireHouseholdFee = util.parse.manToSenString(saveData.fireHouseholdFee) // 訂正前火災保険家財保険金額
        outData.earthquakeBuildingFee = util.parse.manToSenString(saveData.earthquakeBuildingFee) // 訂正前地震保険建物保険金額
        outData.earthquakeHouseholdFee = util.parse.manToSenString(saveData.earthquakeHouseholdFee) // 訂正前地震保険家財保険金額
        outData.totalFee = util.parse.manToSenString(saveData.totalFee)
        outData.withOldContract = util.parse.int(saveData.withOldContract) // 旧保険契約有無
        outData.withOtherContract = util.parse.int(saveData.withOtherContract) // 他保険契約有無
        outData.otherContractAmount = util.parse.int(saveData.otherContractAmount) // 他契約保険金額
        // 試算
        outData.firePaymentMethod = util.parse.int(saveData.firePaymentMethod) // 火災保険支払方法
        outData.earthquakePaymentMethod = util.parse.int(saveData.earthquakePaymentMethod) // 地震保険支払方法
        outData.freeWithFireOnlyCompensation = util.parse.string(saveData.freeWithFireOnlyCompensation) // フリープラン火災等危険のみ補償特約有無
        outData.freeWithWaterDangerContract = util.parse.string(saveData.freeWithWaterDangerContract) // フリープラン水災危険補償対象外特約有無
        outData.freeWithCrudeDangerContract = util.parse.string(saveData.freeWithCrudeDangerContract) // フリープラン雑危険補償対象外特約有無
        // 他契約有無確認画面
        outData.rakutenSonpoFirst = util.parse.string(saveData.rakutenSonpoFirst)
        outData.insuranceTypeKanaFirst = util.parse.string(saveData.insuranceTypeKanaFirst)
        outData.insuranceCompanyKanaFirst = util.parse.string(saveData.insuranceCompanyKanaFirst)
        outData.insuranceTargetFirst = util.parse.string(saveData.insuranceTargetFirst)
        outData.basicInsuranceAmountFirst = util.parse.int(saveData.basicInsuranceAmountFirst)
        outData.earthquakeInsuranceAmountFirst = util.parse.int(saveData.earthquakeInsuranceAmountFirst)
        outData.dueDateFirst = util.parse.string(saveData.dueDateFirst)
        outData.withSecondOtherContract = util.parse.string(saveData.withSecondOtherContract)
        outData.rakutenSonpoSecond = util.parse.string(saveData.rakutenSonpoSecond)
        outData.insuranceTypeKanaSecond = util.parse.string(saveData.insuranceTypeKanaSecond)
        outData.insuranceCompanyKanaSecond = util.parse.string(saveData.insuranceCompanyKanaSecond)
        outData.insuranceTargetSecond = util.parse.string(saveData.insuranceTargetSecond)
        outData.basicInsuranceAmountSecond = util.parse.int(saveData.basicInsuranceAmountSecond)
        outData.earthquakeInsuranceAmountSecond = util.parse.int(saveData.earthquakeInsuranceAmountSecond)
        outData.dueDateSecond = util.parse.string(saveData.dueDateSecond)

        // 申込情報画面で追加
        // 契約種類
        outData.agreeType = util.parse.int(saveData.agreeType)
        // 法人コード・前
        outData.corporateCodeBefore = util.parse.string(saveData.corporateCodeBefore)
        // 法人コード・後
        outData.corporateCodeAfter = util.parse.string(saveData.corporateCodeAfter)
        // 代表者氏名
        outData.representativeName = util.parse.string(saveData.representativeName)
        // 代表者氏名（カナ）
        outData.representativeNameKana = util.parse.string(saveData.representativeNameKana)
        // 契約者メールアドレス(確認)
        outData.contractorMailConfirm = util.parse.string(saveData.contractorMailConfirm)
        // ご契約者と個人賠償の本人の同異
        // 個人賠償補償同異
        outData.personalLiabilityIdentical = util.parse.int(saveData.personalLiabilityIdentical)
        // ご契約者と借家人賠償の本人の同異
        // 借家賠償補償同異
        outData.tenantLiabilityIdentical = util.parse.int(saveData.tenantLiabilityIdentical)
        // 補正課所コード
        outData.correctionOfficeCode = util.parse.string(saveData.correctionOfficeCode)
        // 補正割合
        outData.correctionRatio = util.parse.string(saveData.correctionRatio)
        // 質権設定
        outData.withPledge = util.parse.int(saveData.withPledge)
        // 住宅支援機構融資
        outData.houseSupportFinancing = util.parse.int(saveData.houseSupportFinancing)
        // 抵当権者特約
        outData.withMortgageContract = util.parse.int(saveData.withMortgageContract)
        // 自己特定
        outData.selfSpecific = util.parse.int(saveData.selfSpecific)
        // 代理店特記事項（カナ）
        outData.agentNotesKana = util.parse.string(saveData.agentNotesKana)
        // 領収ハガキ
        outData.noneReceptPostcard = util.parse.int(saveData.noneReceptPostcard)
        // 旧証券番号
        outData.oldPolicyNo = util.parse.string(saveData.oldPolicyNo)
        // 旧証券番号枝番
        outData.oldPolicyNoBranch = util.parse.string(saveData.oldPolicyNoBranch)
        // 証券郵送選択
        outData.policyMailingSelection = util.parse.int(saveData.policyMailingSelection)
        // 課店コード
        outData.salesCode = util.parse.string(saveData.salesCode)
        // 代理店コード
        outData.agentCode = util.parse.string(saveData.agentCode)
        // 募集人ID
        outData.recruitmentID = util.parse.string(saveData.recruitmentID)
        // 募集人名
        outData.recruitmentName = util.parse.string(saveData.recruitmentName)
        // 担当者コード
        outData.agentManagerCode = util.parse.string(saveData.agentManagerCode)
        // 非幹事1代理店コード
        outData.noneManagerAgentCode1 = util.parse.int(saveData.noneManagerAgentCode1)
        // 非幹事2代理店コード
        outData.noneManagerAgentCode2 = util.parse.int(saveData.noneManagerAgentCode2)
        // 営業課店名
        outData.sectionName = util.parse.string(saveData.sectionName)
        // 課店コード（幹事）
        outData.mainManagerStoreCode = util.parse.string(saveData.salesCode)
        // 代理店コード（幹事）
        outData.mainManagerAgentCode = util.parse.string(saveData.agentCode)
        // 代理店名（幹事）
        outData.managerAgentName = util.parse.string(saveData.agentName)
        // 代理店名（幹事）
        outData.agentName = util.parse.string(saveData.agentName)
        // 自己特定（幹事）
        outData.mainManagerSelfSpecific = util.parse.string(saveData.selfSpecific)
        // 課店コード１（非幹事）
        outData.noneManagerStoreCode1 = util.parse.string(saveData.noneManagerStoreCode1)
        // 代理店コード１（非幹事）
        outData.noneManagerAgentCode1 = util.parse.string(saveData.noneManagerAgentCode1)
        // 自己特定１（非幹事）
        outData.noneManagerSelfSpecific1 = util.parse.string(saveData.noneManagerSelfSpecific1)
        // 分担割合１（非幹事）
        outData.noneManagerProportion1 = util.parse.string(saveData.noneManagerProportion1)
        // 保険料１（非幹事）
        outData.noneManagerProportionFee1 = util.parse.string(saveData.noneManagerProportionFee1)
        // 課店コード２（非幹事）
        outData.noneManagerStoreCode2 = util.parse.string(saveData.noneManagerStoreCode2)
        // 代理店コード２（非幹事）
        outData.noneManagerAgentCode2 = util.parse.string(saveData.noneManagerAgentCode2)
        // 自己特定2（非幹事）
        outData.noneManagerSelfSpecific2 = util.parse.string(saveData.noneManagerSelfSpecific2)
        // 分担割合2（非幹事）
        outData.noneManagerProportion2 = util.parse.string(saveData.noneManagerProportion2)
        // 明記物件明細有無
        outData.withSpecificationArticleDetail = util.parse.string(saveData.withSpecificationArticleDetail)

        // outData.methodType = util.parse.int(saveData.methodType) // 評価法区分
        outData.otherMethodAmount = util.parse.string(saveData.otherMethodAmount) // その他評価法入力値
        outData.otherMethodBasis = util.parse.string(saveData.otherMethodBasis) // その他評価法根拠欄
        outData.withEquipmentFireInsurance = util.parse.int(saveData.withEquipmentFireInsurance)
        outData.withGoodsFireInsurance = util.parse.int(saveData.withGoodsFireInsurance)
        outData.specificationArticleAmount = util.parse.manToSenString(saveData.specificationArticleAmount)
        outData.equipmentAmount = util.parse.manToSenString(saveData.equipmentAmount)
        outData.goodsAmount = util.parse.manToSenString(saveData.goodsAmount)
        outData.buildingLoan = util.parse.string(saveData.buildingLoan) // 住宅ローン有無

        // 内容確認画面で追加
        outData.buildingUsage = util.parse.string(saveData.buildingUsage) // 建物用法
        outData.jobWorkType = util.parse.string(saveData.jobWorkType) // 職作業分類
        outData.jobWork = util.parse.string(saveData.jobWork) // 職作業
        outData.severeAlleviationMasure = util.parse.string(saveData.severeAlleviationMasure) // 激変緩和措置
        outData.allUnits = util.parse.string(saveData.allUnits) // 全戸数
        // outData.methodType = util.parse.string(saveData.methodType) // 評価法区分

        if (outData.selectPlan === 1) {
          // おすすめプランの保険料
          outData.fireBuildingFee = util.parse.manToSenString(saveData.advanceFireBuildingFee) // 訂正前火災保険建物保険料
          outData.fireHouseholdFee = util.parse.manToSenString(saveData.advanceFireHouseholdFee) // 訂正前火災保険家財保険料
          outData.earthquakeBuildingFee = util.parse.manToSenString(saveData.advanceEarthquakeBuildingFee) // 訂正前地震保険建物保険料
          outData.earthquakeHouseholdFee = util.parse.manToSenString(saveData.advanceEarthquakeHouseholdFee) // 訂正前地震保険家財保険料
          outData.totalFee = util.parse.manToSenString(saveData.advanceTotalFee)
        } else if (outData.selectPlan === 2) {
          // フリープランの保険料
          outData.fireBuildingFee = util.parse.manToSenString(saveData.freeFireBuildingFee) // 訂正前火災保険建物保険料
          outData.fireHouseholdFee = util.parse.manToSenString(saveData.freeFireHouseholdFee) // 訂正前火災保険家財保険料
          outData.earthquakeBuildingFee = util.parse.manToSenString(saveData.freeEarthquakeBuildingFee) // 訂正前地震保険建物保険料
          outData.earthquakeHouseholdFee = util.parse.manToSenString(saveData.freeEarthquakeHouseholdFee) // 訂正前地震保険家財保険料
          outData.totalFee = util.parse.manToSenString(saveData.freeTotalFee)
        }

        // 口座名義人(漢字)
        outData.accountHolderKanji = util.parse.string(saveData.accountHolderKanji)
        outData.accountHolderKanjiYutyo = util.parse.string(saveData.accountHolderKanjiYutyo)
        console.log(util.parse.string(saveData.accountHolderKanji))
        console.log(util.parse.string(saveData.accountHolderKanjiYutyo))
        // 依頼書取付省略
        outData.requestFormInstallationOmission = util.parse.string(saveData.requestFormInstallationOmission)
        // 初回口振
        outData.firstAccountTransfer = util.parse.string(saveData.firstAccountTransfer)
        // フリープラン火災等危険のみ補償特約有無
        outData.freeWithFireOnlyCompensation = util.parse.int(saveData.freeWithFireOnlyCompensation)
        // おすすめプラン火災等危険のみ補償特約有無
        outData.advanceWithFireOnlyCompensation = util.parse.int(saveData.advanceWithFireOnlyCompensation)
        // 耐火性能郵送フラグ
        outData.fireResistanceMailingFlag = util.parse.int(saveData.fireResistanceMailingFlag)
        // 地震割引郵送フラグ
        outData.earthquakeDiscountMailingFlag = util.parse.int(saveData.earthquakeDiscountMailingFlag)
        outData.equipmentFee = util.parse.int(saveData.equipmentFee) // 設備什器保険料
        outData.goodsFee = util.parse.int(saveData.goodsFee) // 商品製品保険料
        outData.specificationArticleFee = util.parse.int(saveData.specificationArticleFee) // 明記物件保険料
        // 建物管理賠責保険料
        outData.buildingManageLiabilityFee = util.parse.int(saveData.buildingManageLiabilityFee)

        return outData
      }

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // Endpointを決定
      let api
      switch (request.screenID) {
        case 'Building':
          api = NHA_O_0016_API.getEntrySaveBuildingAuto
          break

        case 'InsuranceAmount':
          api = NHA_O_0017_API.getEntrySaveInsAmountAuto
          break

        case 'Earthquake':
          api = NHA_O_0018_API.getEntrySaveEarthquakeAuto
          break

        case 'Estimate':
          api = (request.saveOperation) ? NHA_O_0019_API.getEntrySaveEstimate : NHA_O_0019_API.getEntrySaveEstimateAuto
          request.mytoken = this.state.configs.mytoken
          break

        case 'EntryInfo':
          api = (request.saveOperation) ? NHA_O_0020_API.getEntrySaveEntryInfo : NHA_O_0020_API.getEntrySaveEntryInfoAuto
          request.mytoken = this.state.configs.mytoken
          break

        case 'ExaminationConfirmation':
          api = (request.saveOperation) ? NHA_O_0021_API.getEntrySaveEntryCheck : NHA_O_0021_API.getEntrySaveEntryCheckAuto
          break

        case 'EntryConfirmationAgent':
          api = (request.saveOperation) ? NHA_O_0023_API.getEntrySaveCheckAfter : NHA_O_0023_API.getEntrySaveCheckAfterAuto
          break

        case 'ExaminationUpload':
          api = (request.saveOperation) ? NHA_O_0022_API.getEntrySaveReviewRequest : NHA_O_0022_API.getEntrySaveReviewRequestAuto
          break

        case 'PaymentMethod':
          api = (request.saveOperation) ? NHA_O_0021_API.getEntrySaveMoneyCollection : NHA_O_0021_API.getEntrySaveMoneyCollectionAuto
          break

        case 'EntryCreditCard':
          api = (request.saveOperation) ? NHA_O_0024_API.getEntrySaveEntryRequest : NHA_O_0024_API.getEntrySaveEntryRequestAuto
          break

        case 'DocumentUpload':
          api = (request.saveOperation) ? NHA_O_0022_API.getEntrySaveReviewRequest : NHA_O_0022_API.getEntrySaveReviewRequestAuto
          break
      }

      // 共通のRequest parameterを設定
      if (request.saveOperation !== undefined) {
        delete request.saveOperation
      }
      const apiRequest = adjustData(cloneDeep(request))
      apiRequest.entryNo = state.data.entryNo
      apiRequest.startDate = (apiRequest.startDate) ? apiRequest.startDate : state.data.startDate
      apiRequest.updateTime = (apiRequest.updateTime) ? apiRequest.updateTime : state.data.updateTime
      // apiRequest.mail = (apiRequest.mail) ? apiRequest.mail : request.contractorMail
      apiRequest.mail = (apiRequest.mail) ? apiRequest.mail : util.parse.string(apiRequest.contractorMail)
      if (apiRequest.resetAgentCode === true || !apiRequest.resetAgentCode) {
        apiRequest.agentCode = (apiRequest.agentCode) ? apiRequest.agentCode : this.state.configs.agentCode // 代理店コード
        apiRequest.agentName = (apiRequest.agentName) ? apiRequest.agentName : this.state.configs.agentName // 代理店名
        apiRequest.salesCode = (apiRequest.salesCode) ? apiRequest.salesCode : this.state.configs.agentCode.substring(0, 4) // 営業課店コード
        apiRequest.storeName = (apiRequest.storeName) ? apiRequest.storeName : this.state.configs.storeName // 課店コード名称
      } else {
        apiRequest.agentCode = request.agentCode // 代理店コード
        apiRequest.agentName = request.agentName // 代理店名
        apiRequest.salesCode = request.salesCode // 営業課店コード
        apiRequest.storeName = request.storeName // 営業課店名称
      }
      apiRequest.entryType = state.entryType

      // 審査画面でファイル情報が必要
      if (request.reviewRequestAfterID) {
        apiRequest.reviewRequestAfterID = request.reviewRequestAfterID
      }
      if (request.fileId) {
        apiRequest.fileId = request.fileId
      }

      // 実行
      await api(apiRequest)
        .then(response => {
          const saveData = cloneDeep(request)
          if (response.data.entryNo) {
            saveData.entryNo = util.parse.string(response.data.entryNo)
          }
          if (response.data.policy) {
            saveData.policy = util.parse.string(response.data.policy)
          }
          if (response.data.updateTime) {
            saveData.updateTime = util.parse.string(response.data.updateTime)
          }
          dispatch(ACTIONS.MYAPP_SAVE, saveData)

          // alertInfo
          const alertInfo = cloneDeep(state.alertInfo)
          Object.keys(apiRequest).forEach(key => {
            delete alertInfo[key]
          })
          commit(MUTATIONS.MYAPP_SET_ALERT_INFO, alertInfo)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 保険料確認
     */
    async [ACTIONS.MYAPP_SVR_CONFIRM_FEE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_CONFIRM_FEE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      request.processingID = 1
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)

      // 実行
      await NHA_O_0007_API.getInsPreCon(request)
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 見積書作成
     */
    async [ACTIONS.MYAPP_SVR_ESTIMATED] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ESTIMATED

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      commit(MUTATIONS.MYAPP_SET_SYNC, { [myAction]: { doing: true } })
      // エラークリア
      commit(MUTATIONS.API_CLEAR_ERROR)
      // 実行
      await NHA_O_0003_API.estimationCreate(request)
        .then(function (response) {
          const value = {
            createDate: util.parse.string(response.data.reportContents.entryDate),
            memo: util.parse.string(response.data.reportContents.memo),
            messageCode: util.parse.string(response.data.messageCode),
            messageDesc: util.parse.string(response.data.messageDesc),
            selectPlanText: util.parse.string(response.data.reportContents.selectPlan),
            entryNo: util.parse.string(response.data.reportContents.number),
            agentName: util.parse.string(response.data.reportContents.agencyName),
            agentCode: util.parse.string(response.data.reportContents.agencyCd),
            fireBuildingAmount: util.parse.string(response.data.reportContents.fireAmountT),
            fireHouseholdAmount: util.parse.string(response.data.reportContents.fireAmountK),
            equipmentAmount: util.parse.string(response.data.reportContents.facilitiesAmount),
            productAmount: util.parse.string(response.data.reportContents.productAmount),
            specificationArticleAmount: util.parse.string(response.data.reportContents.statedAmount),
            earthquakeBuildingAmount: util.parse.string(response.data.reportContents.quakeAmountT),
            earthquakeHouseholdAmount: util.parse.string(response.data.reportContents.quakeAmountK),
            fireStartDate: util.parse.string(response.data.reportContents.fireShiki),
            fireEndDate: util.parse.string(response.data.reportContents.fireManki),
            fireTerm: util.parse.string(response.data.reportContents.fireInsurancePeriod),
            earthquakeStartDate: util.parse.string(response.data.reportContents.jisinShiki),
            earthquakeEndDate: util.parse.string(response.data.reportContents.jisinManki),
            earthquakeTerm: util.parse.string(response.data.reportContents.quakeInsurancePeriod),
            objectLocation: util.parse.string(response.data.reportContents.location),
            usageJob: util.parse.string(response.data.reportContents.jobWork),
            ownership: util.parse.string(response.data.reportContents.own),
            buildingType: util.parse.string(response.data.reportContents.type),
            structureGrade: util.parse.string(response.data.reportContents.grade),
            area: util.parse.string(response.data.reportContents.area),
            buildingDate: util.parse.string(response.data.reportContents.builtYear),
            discountIncrease: util.parse.string(response.data.reportContents.discount),
            withFireCompensation: util.parse.int(response.data.reportContents.fire),
            withWindCompensation: response.data.reportContents.wind === null ? util.parse.int(response.data.reportContents.wind2) : util.parse.int(response.data.reportContents.wind),
            windCopayment: util.parse.string(response.data.reportContents.windAmount),
            withWaterCompensation: util.parse.int(response.data.reportContents.water),
            withWaterStainedCompensation: util.parse.int(response.data.reportContents.wet),
            withCorruptionCompensation: response.data.reportContents.damage === null ? util.parse.int(response.data.reportContents.damage2) : util.parse.int(response.data.reportContents.damage),
            corruptionCopayment: util.parse.string(response.data.reportContents.damageAmount),
            corruptionHouseholdLimited: util.parse.string(response.data.reportContents.damageLimit),
            withDisasterExpensesCompensation: response.data.reportContents.disaster === null ? util.parse.int(response.data.reportContents.disaster2) : util.parse.int(response.data.reportContents.disaster),
            disasterExpensesLimited: util.parse.string(response.data.reportContents.disasterLimit),
            withEarthquakeExpenses: util.parse.int(response.data.reportContents.quake),
            withWaterPipeRepairCost: util.parse.int(response.data.reportContents.pipe),
            withTemporaryHouseCost: util.parse.int(response.data.reportContents.temp),
            withLockRepairCost: util.parse.int(response.data.reportContents.lock),
            withSpecialCost: util.parse.int(response.data.reportContents.special),
            withDamagePreventionCost: util.parse.int(response.data.reportContents.prevent),
            withEarthquake: util.parse.int(response.data.reportContents.eruption),
            withEarthquake2: util.parse.int(response.data.reportContents.eruption2),
            withPersonalLiability: response.data.reportContents.personal === null ? util.parse.int(response.data.reportContents.personal2) : util.parse.int(response.data.reportContents.personal),
            personalLiabilityLimited: util.parse.string(response.data.reportContents.personalLimit),
            withTenantLiability: response.data.reportContents.tenant === null ? util.parse.int(response.data.reportContents.tenant2) : util.parse.int(response.data.reportContents.tenant),
            tenantLiabilityLimited: util.parse.string(response.data.reportContents.tenantLimit),
            withBuildingManageLiability: response.data.reportContents.building === null ? util.parse.int(response.data.reportContents.building2) : util.parse.int(response.data.reportContents.building),
            buildingManageLiabilityLimited: util.parse.string(response.data.reportContents.buildingLimit),
            withExposureCompensation: response.data.reportContents.ruisyou === null ? util.parse.int(response.data.reportContents.ruisyou2) : util.parse.int(response.data.reportContents.ruisyou),
            exposureCompensationLimited: util.parse.string(response.data.reportContents.ruisyouLimit),
            otherContract: util.parse.string(response.data.reportContents.other),
            paymentMethod: util.parse.string(response.data.reportContents.payment),
            collectMethod: util.parse.string(response.data.reportContents.collect),
            fireFee: util.parse.string(response.data.reportContents.recFireAmount),
            earthquakeFee: util.parse.string(response.data.reportContents.recQuakeAmount),
            totalFee: util.parse.string(response.data.reportContents.recTotalAmount),
            annualFee: util.parse.string(response.data.reportContents.recYearsAmount)
          }
          commit(MUTATIONS.MYAPP_SET_ESTIMATEDDATA, value)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 住所検索
     */
    async [ACTIONS.MYAPP_SVR_ADD_SEARCH] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ADD_SEARCH

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      // 実行
      await NHA_O_0026_API.getAddressSearch(request)
        .then(response => {
          const list = []
          response.data.list.forEach(item => {
            list.push({
              addressCode: util.parse.string(item.addressCode) || null,
              kanJiPrefectureName: util.parse.string(item.kanJiPrefectureName) || '',
              kaNaPrefectureName: util.parse.string(item.kaNaPrefectureName) || '',
              kanJiCityCountyName: util.parse.string(item.kanJiCityCountyName) || '',
              kaNaCityCountyName: util.parse.string(item.kaNaCityCountyName) || '',
              kanJiMunicipalityName: util.parse.string(item.kanJiMunicipalityName) || '',
              kaNaMunicipalityName: util.parse.string(item.kaNaMunicipalityName) || ''
            })
          })
          commit(MUTATIONS.MYAPP_SET_ADDRESSDATA, list)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          // 読込画面 終了
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * [SERVER APIと連携] 審査依頼
     */
    async [ACTIONS.MYAPP_SVR_REQUEST_REVIEW] ({ state, dispatch, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_REQUEST_REVIEW

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // API NHA_O_0007 保険料確認
      const childAction = ACTIONS.MYAPP_SVR_CONFIRM_FEE
      await dispatch(childAction, { entryNo: state.data.entryNo })
      if (state.sync[childAction].status !== 200) {
        commit(MUTATIONS.MYAPP_SET_SYNC, { [myAction]: cloneDeep(state.sync[childAction]) })
        return
      }

      // 共通のRequest parameterを設定
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)

      // 実行
      await NHA_O_0012_API.getReviewRequest(request)
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] 審査依頼NO.再通知
     */
    async [ACTIONS.MYAPP_SVR_ENTRYNO_REINFORM] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ENTRYNO_REINFORM

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0013_API.entryNoRenotification(request)
        .then(function (response) {})
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] ファイルアップロード
     */
    async [ACTIONS.MYAPP_SVR_FILE_UPLOAD] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_FILE_UPLOAD

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      // Request parameterを作成
      const multipartRequest = new FormData()
      for (const key in request) {
        multipartRequest.append(key, request[key])
      }

      // 実行
      await NHA_O_0010_API.getFileUpload(multipartRequest)
        .then(response => {
          const data = util.multipart(response.data)
          const fileList = cloneDeep(state.fileList)
          const info = fileList.filter(item => item.fileNo === util.parse.string(data.fileNo))
          if (info.length > 0) {
            info[0].thumbnail = util.parse.string(data.thumbnail)
          } else {
            fileList.push({
              fileId: util.parse.string(data.fileNo),
              fileName: request.fileName,
              fileType: request.fileType,
              docType: request.docType,
              withInsurancePolicyDiscountDescription: request.withInsurancePolicyDiscountDescription,
              thumbnail: util.parse.string(data.thumbnail)
            })
          }
          commit(MUTATIONS.MYAPP_SET_UPLOAD_FILE_INFO, fileList)
        })
        .catch(error => {
          if (error.response) {
            const data = util.multipart(error.response.data)
            error.response.data = data
          }
          util.api.error(myAction, state.sync, error)
        })
        .finally(() => util.api.end(myAction, state.sync))

      // 読込画面 終了
      commit(MUTATIONS.UI_SET_LOADING_OFF)
    },
    /**
     * [SERVER APIと連携] 申込依頼
     */
    async [ACTIONS.MYAPP_SVR_ENTRY_REQUEST] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ENTRY_REQUEST

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      // 実行
      await NHA_O_0008_API.getEntryRequest(request)
        .then(function (response) {
          // 証券番号
          const value = {
            policy: response.data.policy,
            startDate: response.data.startDate, // 始期日エラーの場合の修正始期日
            newStartDateMin: response.data.startDate // 始期日エラーの場合の修正始期日範囲
          }
          // Alert情報
          const alertInfo = response.data.alertInfo || []
          const alertInfoHash = {}
          alertInfo.forEach((item, index) => {
            const key = item.parametersName
            alertInfoHash[key] = item
          })

          commit(MUTATIONS.MYAPP_SET_DATA, value)
          commit(MUTATIONS.MYAPP_SET_ALERT_INFO, alertInfoHash)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          // 読込画面 終了
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * [SERVER APIと連携] 申込登録
     */
    async [ACTIONS.MYAPP_SVR_ENTRY_REGISTRATION] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ENTRY_REGISTRATION

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 仕様新規の対応 20190320 BY KYOKU UPD START
      // 実行
      await NHA_O_0050_API.isShinsaCheck(request)
        .then(function (response) {
          console.log('--------response.data.result111---------' + response.data.result)
          // 保険会社点検チェックの戻り値＝0の場合
          if (response.data.result === 0 || response.data.result === '0') {
            console.log('--------response.data.result2222---------' + response.data.result)
            // 申込登録処理を実施する
            NHA_O_0009_API.getRegistration(request)
              .then(function (response) {
              })
              .catch(error => util.api.error(myAction, state.sync, error))
              .finally(() => util.api.end(myAction, state.sync))
          }
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
      // 仕様新規の対応 20190320 BY KYOKU END

      // 実行
      // await NHA_O_0009_API.getRegistration(request)
      //   .then(function (response) {
      //   })
      //   .catch(error => util.api.error(myAction, state.sync, error))
      //   .finally(() => util.api.end(myAction, state.sync))

      // 仕様新規の対応 20190320 BY KYOKU UPD END
    },
    /**
     * [SERVER APIと連携] ファイル削除
     */
    async [ACTIONS.MYAPP_SVR_FILE_DELETE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_FILE_DELETE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0010_API.getFileDelete(request)
        .then(response => {
          const fileList = cloneDeep(state.fileList)
          fileList.some((item, index) => {
            if (item.fileId === request.fileNo) {
              fileList.splice(index, 1)
            }
          })
          commit(MUTATIONS.MYAPP_SET_UPLOAD_FILE_INFO, fileList)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * [SERVER APIと連携] ファイル削除一括
     */
    async [ACTIONS.MYAPP_SVR_FILE_DELETE_ARRAY] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_FILE_DELETE_ARRAY

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0010_API.getFileDeleteArray(request)
        .then(response => {
          const fileList = cloneDeep(state.fileList)
          var i
          fileList.some((item, index) => {
            for (i = 0; i < request.fileNoArray.length; i++) {
              console.log('item.fileId=' + item.fileId)
              console.log('request.fileNoArray[i]=' + request.fileNoArray[i])
              if (item.fileId === request.fileNoArray[i]) {
                fileList.splice(index, 1)
              }
            }
          })
          commit(MUTATIONS.MYAPP_SET_UPLOAD_FILE_INFO, fileList)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 試算
     */
    async [ACTIONS.MYAPP_SVR_CALC_ESTIMATE] ({ state, commit }, params) {
      const myAction = ACTIONS.MYAPP_SVR_CALC_ESTIMATE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)
      let request = cloneDeep(params)
      request.entrySaveTrialBean.windCopayment = util.parse.manToSenString(request.entrySaveTrialBean.windCopayment) // 風災・ひょう災・雪災自己負担額
      request.entrySaveTrialBean.corruptionCopayment = util.parse.manToSenString(request.entrySaveTrialBean.corruptionCopayment) // 破損・汚損等自己負担額
      request.entrySaveTrialBean.corruptionHouseholdLimited = util.parse.manToSenString(request.entrySaveTrialBean.corruptionHouseholdLimited) // 破損・汚損等家財支払限度額
      // 実行
      await NHA_O_0002_API.getEstimateHa(request)
        .then(function (response) {
          let values = {}
          const entry = params.entrySaveTrialBean
          if (request.entrySaveTrialBean.selectPlan === 1) {
            values = {
              // 火災保険期間
              fireTerm: entry.fireTerm,
              // 地震保険期間
              earthquakeTerm: entry.earthquakeTerm,
              // 保険料のお支払方法
              paymentType: entry.paymentType,
              // 火災保険のお支払方法
              firePaymentMethod: entry.firePaymentMethod,
              // 地震保険のお支払方法
              earthquakePaymentMethod: entry.earthquakePaymentMethod,
              // 制限コード
              restrictionCode: entry.restrictionCode,
              // 決定番号
              decisionNo: entry.decisionNo,
              // 火災・落雷・破裂・爆発補償有無
              advanceWithFireCompensation: entry.withFireCompensation,
              // 風災・ひょう災・雪災補償有無
              advanceWithWindCompensation: entry.withWindCompensation,
              // 風災・ひょう災・雪災自己負担額
              advanceWindCopayment: entry.windCopayment,
              // 水災補償有無
              advanceWithWaterCompensation: entry.withWaterCompensation,
              // 水濡れ・盗難補償有無
              advanceWithWaterStainedCompensation: entry.withWaterStainedCompensation,
              // 破損・汚損等補償有無
              advanceWithCorruptionCompensation: entry.withCorruptionCompensation,
              // 破損・汚損等自己負担額
              advanceCorruptionCopayment: entry.corruptionCopayment,
              // 破損・汚損等家財支払限度額
              advanceCorruptionHouseholdLimited: entry.corruptionHouseholdLimited,
              // 地震・噴火・津波補償有無（建物）
              advanceWithEarthquakeCompensationHousehold: entry.withEarthquakeCompensationHousehold,
              // 地震・噴火・津波補償有無（家財）
              advanceWithEarthquakeCompensationBuilding: entry.withEarthquakeCompensationBuilding,
              // 災害時諸費用補償有無
              advanceWithDisasterExpensesCompensation: entry.withDisasterExpensesCompensation,
              // 災害時諸費用支払限度額
              advanceDisasterExpensesLimited: entry.disasterExpensesLimited,
              // 費用保険金補償有無
              advanceWithExpenseCompensation: entry.withExpenseCompensation,
              // 個人賠償責任補償特約有無
              advanceWithPersonalLiability: entry.withPersonalLiability,
              // 借家人賠償責任補償特約有無
              advanceWithTenantLiability: entry.withTenantLiability,
              // 借家人賠償責任補償特約支払限度額
              advanceTenantLiabilityLimited: entry.tenantLiabilityLimited,
              // 類焼損害補償特約有無
              advanceWithExposureCompensation: entry.withExposureCompensation,
              // 建替費用補償特約有無
              advanceWithRebuildingCostCompensation: entry.withRebuildingCostCompensation,
              // 共用部分修理費用補償特約有無
              advanceWithCommonRepairCostCompensation: entry.withCommonRepairCostCompensation,
              // 防犯対策費用補償特約有無
              advanceWithCrimeCostCompensation: entry.withCrimeCostCompensation,
              // 持ち出し家財補償特約有無
              advanceWithCorbelHouseholdCompensation: entry.withCorbelHouseholdCompensation,
              // 引越し中の損害補償特約有無
              advanceWithMovingCompensation: entry.withMovingCompensation,
              advanceFireBuildingFee: util.parse.int(response.data.fireBuildingFee), // 火災保険建物保険料
              advanceFireHouseholdFee: util.parse.int(response.data.fireHouseholdFee), // 火災保険家財保険料
              advanceEquipmentFee: util.parse.int(response.data.equipmentFee), // 設備什器保険料
              advanceGoodsFee: util.parse.int(response.data.goodsFee), // 商品製品保険料
              advanceSpecificationArticleFee: util.parse.int(response.data.specificationArticleFee), // 明記物件保険料
              advanceBuildingManageLiabilityFee: util.parse.int(response.data.buildingManageLiabilityFee), // 建物管理賠責保険料
              advancePersonalLiabilityFee: util.parse.int(response.data.personalLiabilityFee), // 個人賠償保険料
              advanceTenantLiabilityFee: util.parse.int(response.data.tenantLiabilityFee), // 借家人賠償保険料
              advanceExposureFee: util.parse.int(response.data.exposureFee), // 類焼保険料
              advanceFireFee: util.parse.int(response.data.fireFee), // 火災保険料
              advanceEarthquakeBuildingFee: util.parse.int(response.data.earthquakeBuildingFee), // 地震保険建物保険料
              advanceEarthquakeHouseholdFee: util.parse.int(response.data.earthquakeHouseholdFee), // 地震保険家財保険料
              advanceEarthquakeFee: util.parse.int(response.data.earthquakeFee), // 地震保険料
              advanceTotalFee: util.parse.int(response.data.totalFee), // 合計保険料
              advanceAnnualFee: util.parse.int(response.data.annualFee), // 年額保険料(火災)
              advanceAnnualPaymentFirstInsuranceFee: util.parse.int(response.data.firstInsuranceFee), // util.parse.int(response.data.annualPaymentFirstInsuranceFee), // 初回保険料(火災)
              advanceEarthquakeAnnualFee: util.parse.int(response.data.earthquakeAnnualFee), // 年額保険料(地震)
              advanceEarthquakeAnnualPaymentFirstInsuranceFee: util.parse.int(response.data.earthquakeAnnualPaymentFirstInsuranceFee) // 初回保険料(地震)
            }
          } else {
            values = {
              // 火災保険期間
              fireTerm: entry.fireTerm,
              // 地震保険期間
              earthquakeTerm: entry.earthquakeTerm,
              // 保険料のお支払方法
              paymentType: entry.paymentType,
              // 火災保険のお支払方法
              firePaymentMethod: entry.firePaymentMethod,
              // 地震保険のお支払方法
              earthquakePaymentMethod: entry.earthquakePaymentMethod,
              // 制限コード
              restrictionCode: entry.restrictionCode,
              // 決定番号
              decisionNo: entry.decisionNo,
              // 火災・落雷・破裂・爆発補償有無
              freeWithFireCompensation: entry.withFireCompensation,
              // 風災・ひょう災・雪災補償有無
              freeWithWindCompensation: entry.withWindCompensation,
              // 風災・ひょう災・雪災自己負担額
              freeWindCopayment: entry.windCopayment,
              // 水災補償有無
              freeWithWaterCompensation: entry.withWaterCompensation,
              // 水濡れ・盗難補償有無
              freeWithWaterStainedCompensation: entry.withWaterStainedCompensation,
              // 破損・汚損等補償有無
              freeWithCorruptionCompensation: entry.withCorruptionCompensation,
              // 破損・汚損等自己負担額
              freeCorruptionCopayment: entry.corruptionCopayment,
              // 破損・汚損等家財支払限度額
              freeCorruptionHouseholdLimited: entry.corruptionHouseholdLimited,
              // 地震・噴火・津波補償有無（建物）
              freeWithEarthquakeCompensationHousehold: entry.withEarthquakeCompensationHousehold,
              // 地震・噴火・津波補償有無（家財）
              freeWithEarthquakeCompensationBuilding: entry.withEarthquakeCompensationBuilding,
              // 災害時諸費用補償有無
              freeWithDisasterExpensesCompensation: entry.withDisasterExpensesCompensation,
              // 災害時諸費用支払限度額
              freeDisasterExpensesLimited: entry.disasterExpensesLimited,
              // 費用保険金補償有無
              freeWithExpenseCompensation: entry.withExpenseCompensation,
              // 個人賠償責任補償特約有無
              freeWithPersonalLiability: entry.withPersonalLiability,
              // 借家人賠償責任補償特約有無
              freeWithTenantLiability: entry.withTenantLiability,
              // 借家人賠償責任補償特約支払限度額
              freeTenantLiabilityLimited: entry.tenantLiabilityLimited,
              // 類焼損害補償特約有無
              freeWithExposureCompensation: entry.withExposureCompensation,
              // 建替費用補償特約有無
              freeWithRebuildingCostCompensation: entry.withRebuildingCostCompensation,
              // 共用部分修理費用補償特約有無
              freeWithCommonRepairCostCompensation: entry.withCommonRepairCostCompensation,
              // 防犯対策費用補償特約有無
              freeWithCrimeCostCompensation: entry.withCrimeCostCompensation,
              // 持ち出し家財補償特約有無
              freeWithCorbelHouseholdCompensation: entry.withCorbelHouseholdCompensation,
              // 引越し中の損害補償特約有無
              freeWithMovingCompensation: entry.withMovingCompensation,
              freeFireBuildingFee: util.parse.int(response.data.fireBuildingFee), // 火災保険建物保険料
              freeFireHouseholdFee: util.parse.int(response.data.fireHouseholdFee), // 火災保険家財保険料
              freeEquipmentFee: util.parse.int(response.data.equipmentFee), // 設備什器保険料
              freeGoodsFee: util.parse.int(response.data.goodsFee), // 商品製品保険料
              freeSpecificationArticleFee: util.parse.int(response.data.specificationArticleFee), // 明記物件保険料
              freeBuildingManageLiabilityFee: util.parse.int(response.data.buildingManageLiabilityFee), // 建物管理賠責保険料
              freePersonalLiabilityFee: util.parse.int(response.data.personalLiabilityFee), // 個人賠償保険料
              freeTenantLiabilityFee: util.parse.int(response.data.tenantLiabilityFee), // 借家人賠償保険料
              freeExposureFee: util.parse.int(response.data.exposureFee), // 類焼保険料
              freeFireFee: util.parse.int(response.data.fireFee), // 火災保険料
              freeEarthquakeBuildingFee: util.parse.int(response.data.earthquakeBuildingFee), // 地震保険建物保険料
              freeEarthquakeHouseholdFee: util.parse.int(response.data.earthquakeHouseholdFee), // 地震保険家財保険料
              freeEarthquakeFee: util.parse.int(response.data.earthquakeFee), // 地震保険料
              freeTotalFee: util.parse.int(response.data.totalFee), // 合計保険料
              freeAnnualFee: util.parse.int(response.data.annualFee), // 年額保険料
              freeAnnualPaymentFirstInsuranceFee: util.parse.int(response.data.firstInsuranceFee) // util.parse.int(response.data.annualPaymentFirstInsuranceFee) // 初回保険料
              // freeEarthquakeAnnualFee: util.parse.int(response.data.earthquakeAnnualFee), // 年額保険料(地震)
              // freeEarthquakeAnnualPaymentFirstInsuranceFee: util.parse.int(response.data.earthquakeAnnualPaymentFirstInsuranceFee) // 初回保険料(地震)
            }
          }
          values.fireEndDate = util.parse.string(response.data.fireEndDate)
          values.earthquakeEndDate = util.parse.string(response.data.earthquakeEndDate)
          values.debugInfoInput = response.data.debugInfoInput
          values.debugInfoOutput = response.data.debugInfoOutput
          values.estimateErrorMsg = response.data.errorMsg
          commit(MUTATIONS.MYAPP_SET_DATA, values)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          // 読込画面 終了
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        }
        )
    },
    /**
     * 年次取得法
     */
    async [ACTIONS.MYAPP_SVR_ACQUISITION_ANNUAL] ({ state, commit }, params) {
      const myAction = ACTIONS.MYAPP_SVR_ACQUISITION_ANNUAL

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      let request = cloneDeep(params)
      request.newBuildingValue = util.parse.manToSenString(request.newBuildingValue) // 建築時の取得価額

      // 共通のRequest parameterを設定
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)
      // reset
      const resetvalue = {
        fireBuildingAmount: null
      }
      commit(MUTATIONS.MYAPP_SET_DATA, resetvalue)

      // 実行
      await NHA_O_0025_API.getEvaluationValueCalculation(request)
        .then(function (response) {
          // 建物保険金額
          const value = {
            fireBuildingAmount: util.parse.senToMan(response.data.buildingAppraisedCalculationResults)
          }
          commit(MUTATIONS.MYAPP_SET_DATA, value)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * 概観法
     */
    async [ACTIONS.MYAPP_SVR_OVERVIEW] ({ state, commit }, params) {
      const myAction = ACTIONS.MYAPP_SVR_OVERVIEW

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      let request = cloneDeep(params)
      request.newBuildingValue = util.parse.manToSenString(request.newBuildingValue) // 建築時の取得価額

      // 共通のRequest parameterを設定
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)

      // 実行
      await NHA_O_0025_API.getEvaluationValueCalculation(request)
        .then(function (response) {
          // 建物保険金額
          const value = {
            buildingAppraisedLower: util.parse.senToMan(response.data.buildingOnlyAppraisalValueLower),
            buildingAppraisedUpper: util.parse.senToMan(response.data.buildingOnlyAppraisalValueUpper)
          }
          commit(MUTATIONS.MYAPP_SET_DATA, value)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * その他評価法
     */
    async [ACTIONS.MYAPP_SVR_OTHER_METHOD] ({ state, commit }, params) {
      const myAction = ACTIONS.MYAPP_SVR_OTHER_METHOD

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      let request = cloneDeep(params)
      request.otherMethodBuildingAmount = util.parse.manToSenString(request.otherMethodBuildingAmount) // その他評価法の建物保険金額
      // // 共通のRequest parameterを設定
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)
      // 実行
      await NHA_O_0025_API.getEvaluationValueCalculation(request)
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * 家財評価額
     */
    async [ACTIONS.MYAPP_SVR_HOUSEHOLD_EVOLUTION] ({ state, commit }, params) {
      const myAction = ACTIONS.MYAPP_SVR_HOUSEHOLD_EVOLUTION

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      let request = cloneDeep(params)
      request.newBuildingValue = util.parse.manToSenString(request.newBuildingValue) // 建築時の取得価額

      // 共通のRequest parameterを設定
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)

      // reset
      const value = {
        householdAppraisedLower: null,
        householdAppraisedUpper: null
      }
      commit(MUTATIONS.MYAPP_SET_DATA, value)

      // 実行
      await NHA_O_0025_API.getEvaluationValueCalculation(request)
        .then(function (response) {
          // 家財保険金額
          const value = {
            householdAppraisedLower: util.parse.senToMan(response.data.householdInsuranceAmountLower),
            householdAppraisedUpper: util.parse.senToMan(response.data.householdInsuranceAmountUpper)
          }
          commit(MUTATIONS.MYAPP_SET_DATA, value)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => {
          util.api.end(myAction, state.sync)
          commit(MUTATIONS.UI_SET_LOADING_OFF)
        })
    },
    /**
     * 地震保険保険金額
     */
    async [ACTIONS.MYAPP_SVR_CALC_EARTHQUAKE] ({ state, commit }) {
      const myAction = ACTIONS.MYAPP_SVR_CALC_EARTHQUAKE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 共通のRequest parameterを設定
      const request = {}
      request.entryNo = state.data.entryNo // お申込依頼№(entryNo)
      request.screenID = 'Earthquake'

      // 実行
      await NHA_O_0025_API.getEvaluationEarthquake(request)
        .then(function (response) {
          const value = {
            earthquakeBuildingAmountLower: util.parse.senToMan(response.data.earthquakeBuildingAmountLower),
            earthquakeBuildingAmountUpper: util.parse.senToMan(response.data.earthquakeBuildingAmountUpper),
            earthquakeHouseholdAmountLower: util.parse.senToMan(response.data.earthquakeHouseholdAmountLower),
            earthquakeHouseholdAmountUpper: util.parse.senToMan(response.data.earthquakeHouseholdAmountUpper)
          }
          commit(MUTATIONS.MYAPP_SET_DATA, value)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    async [ACTIONS.MYAPP_SET_ESTIMATE_PLAN] ({ state, commit }) {
      let data = {}
      if (state.data.selectPlan === 1) {
        // おすすめプラン選択
        data.withFireCompensation = state.data.advanceWithFireCompensation // 火災・落雷・破裂・爆発補償有無（1:あり、2:なし）
        data.withWindCompensation = state.data.advanceWithWindCompensation // 風災・ひょう災・雪災補償有無（1:あり、2:なし）
        data.windCopayment = state.data.advanceWindCopayment // 風災・ひょう災・雪災自己負担額
        data.withWaterCompensation = state.data.advanceWithWaterCompensation // 水災補償有無（1:あり、2:なし）
        data.withWaterStainedCompensation = state.data.advanceWithWaterStainedCompensation // 盗難・水濡れ補償有無（1:あり、2:なし）
        data.withCorruptionCompensation = state.data.advanceWithCorruptionCompensation // 破損・汚損等補償有無（1:あり、2:なし）
        data.corruptionCopayment = state.data.advanceCorruptionCopayment // 破損・汚損等自己負担額
        data.corruptionHouseholdLimited = state.data.advanceCorruptionHouseholdLimited // 破損・汚損等支払限度額
        data.withEarthquakeCompensation = state.data.advanceWithEarthquakeCompensation // 地震・噴火・津波補償有無（1:あり、2:なし）
        data.withDisasterExpensesCompensation = state.data.advanceWithDisasterExpensesCompensation // 災害時諸費用補償有無（1:あり、2:なし）
        data.disasterExpensesLimited = state.data.advanceDisasterExpensesLimited // 災害時諸費用支払限度額
        data.withExpenseCompensation = state.data.advanceWithExpenseCompensation // 費用保険金補償有無（1:あり、2:なし）
        data.withPersonalLiability = state.data.advanceWithPersonalLiability // 個人賠償責任補償特約有無（1:あり、2:なし）
        data.withTenantLiability = state.data.advanceWithTenantLiability // 借家人賠償責任補償特約有無（1:あり、2:なし）
        data.tenantLiabilityLimited = state.data.advanceTenantLiabilityLimited // 借家人賠償責任補償特約支払限度額
        data.withBuildingManageLiability = state.data.advanceWithBuildingManageLiability // 建物管理賠償責任補償特約有無（1:あり、2:なし）
        data.buildingManageLiabilityLimited = state.data.advanceBuildingManageLiabilityLimited // 建物管理賠償責任補償特約支払限度額
        data.withExposureCompensation = state.data.advanceWithExposureCompensation // 類焼損害補償特約有無（1:あり、2:なし）
        data.withRebuildingCostCompensation = state.data.advanceWithRebuildingCostCompensation // 建替費用補償特約有無（1:あり、2:なし）
        data.withCommonRepairCostCompensation = state.data.advanceWithCommonRepairCostCompensation // 共用部分修理費用補償特約有無（1:あり、2:なし）
        data.withCrimeCostCompensation = state.data.advanceWithCrimeCostCompensation // 防犯対策費用補償特約有無（1:あり、2:なし）
        data.withCorbelHouseholdCompensation = state.data.advanceWithCorbelHouseholdCompensation // 持ち出し家財補償特約有無（1 =あり、2 =なし）
        data.withMovingCompensation = state.data.advanceWithMovingCompensation // 引越し中の損害補償特約有無（1 =あり、2 =なし）
        data.withWaterLeakBuildingManageCompensation = '2' // 漏水による建物管理賠償責任補償対象外特約
        if (state.entryType === '2' && state.data.withBuildingFireInsurance === 1 && state.data.buildingOwnership === 1 && state.data.buildingFrom === 3) {
          data.withWaterResearch = 1 // 水濡れ原因調査費用補償特約（1 =あり、2 =なし）
        }
        data.withWindPaymentMethodContract = '2' // 風災等支払方法変更特約（1 =あり、2 =なし）
        data.withWaterPaymentMethodContract = '2' // 水災支払方法変更特約（ １=あり、2 =なし）
        data.withCorporationAgreement = '2' // 法人等契約の被保険者に関する特約（ １=あり、2 =なし）
        data.withKasaiKikenNomiHosho = '2' // 火災等危険のみ補償特約（ １=あり、2 =なし）
        data.fireBuildingFee = state.data.advanceFireBuildingFee // 火災保険建物保険料
        data.fireHouseholdFee = state.data.advanceFireHouseholdFee // 火災保険家財保険料
        data.fireFee = state.data.advanceFireFee // 火災保険料
        data.earthquakeBuildingFee = state.data.advanceEarthquakeBuildingFee // 地震保険建物保険料
        data.earthquakeHouseholdFee = state.data.advanceEarthquakeHouseholdFee // 地震保険家財保険料
        data.earthquakeFee = state.data.advanceEarthquakeFee // 地震保険料
        data.totalFee = state.data.advanceTotalFee // 合計保険料
      } else if (state.data.selectPlan === 2) {
        // フリープラン選択
        data.withFireCompensation = state.data.freeWithFireCompensation // 火災・落雷・破裂・爆発補償有無（1:あり、2:なし）
        data.withWindCompensation = state.data.freeWithWindCompensation // 風災・ひょう災・雪災補償有無（1:あり、2:なし）
        data.windCopayment = state.data.freeWindCopayment // 風災・ひょう災・雪災自己負担額
        data.withWaterCompensation = state.data.freeWithWaterCompensation // 水災補償有無（1:あり、2:なし）
        data.withWaterStainedCompensation = state.data.freeWithWaterStainedCompensation // 盗難・水濡れ補償有無（1:あり、2:なし）
        data.withCorruptionCompensation = state.data.freeWithCorruptionCompensation // 破損・汚損等補償有無（1:あり、2:なし）
        data.corruptionCopayment = state.data.freeCorruptionCopayment // 破損・汚損等自己負担額
        data.corruptionHouseholdLimited = state.data.freeCorruptionHouseholdLimited // 破損・汚損等支払限度額
        data.withEarthquakeCompensation = state.data.freeWithEarthquakeCompensation // 地震・噴火・津波補償有無（1:あり、2:なし）
        data.withDisasterExpensesCompensation = state.data.freeWithDisasterExpensesCompensation // 災害時諸費用補償有無（1:あり、2:なし）
        data.disasterExpensesLimited = state.data.freeDisasterExpensesLimited // 災害時諸費用支払限度額
        data.withExpenseCompensation = state.data.freeWithExpenseCompensation // 費用保険金補償有無（1:あり、2:なし）
        data.withPersonalLiability = state.data.freeWithPersonalLiability // 個人賠償責任補償特約有無（1:あり、2:なし）
        data.withTenantLiability = state.data.freeWithTenantLiability // 借家人賠償責任補償特約有無（1:あり、2:なし）
        data.tenantLiabilityLimited = state.data.freeTenantLiabilityLimited // 借家人賠償責任補償特約支払限度額
        data.withBuildingManageLiability = state.data.freeWithBuildingManageLiability // 建物管理賠償責任補償特約有無（1:あり、2:なし）
        data.buildingManageLiabilityLimited = state.data.freeBuildingManageLiabilityLimited // 建物管理賠償責任補償特約支払限度額
        data.withExposureCompensation = state.data.freeWithExposureCompensation // 類焼損害補償特約有無（1:あり、2:なし）
        data.withRebuildingCostCompensation = state.data.freeWithRebuildingCostCompensation // 建替費用補償特約有無（1:あり、2:なし）
        data.withCommonRepairCostCompensation = state.data.freeWithCommonRepairCostCompensation // 共用部分修理費用補償特約有無（1:あり、2:なし）
        data.withCrimeCostCompensation = state.data.freeWithCrimeCostCompensation // 防犯対策費用補償特約有無（1:あり、2:なし）
        data.withCorbelHouseholdCompensation = state.data.freeWithCorbelHouseholdCompensation // 持ち出し家財補償特約有無（1 =あり、2 =なし）
        data.withMovingCompensation = state.data.freeWithMovingCompensation // 引越し中の損害補償特約有無（1 =あり、2 =なし）
        data.withWaterLeakBuildingManageCompensation = state.data.waterLeakBuildingManageCompensationOption // 漏水による建物管理賠償責任補償対象外特約
        data.withWaterResearch = state.data.waterStainedExpensesCompensationOption // 水濡れ原因調査費用補償特約（1 =あり、2 =なし）
        data.withWindPaymentMethodContract = state.data.windPaymentMethodContractOption // 風災等支払方法変更特約（1 =あり、2 =なし）
        data.withWaterPaymentMethodContract = state.data.waterPaymentMethodContractOption // 水災支払方法変更特約（ １=あり、2 =なし）
        data.withCorporationAgreement = state.data.orporateInsuredContractOption // 法人等契約の被保険者に関する特約（ １=あり、2 =なし）
        data.withKasaiKikenNomiHosho = state.data.fireDangerCompensationOption // 火災等危険のみ補償特約（ １=あり、2 =なし）
        data.fireBuildingFee = state.data.freeFireBuildingFee // 火災保険建物保険料
        data.fireHouseholdFee = state.data.freeFireHouseholdFee // 火災保険家財保険料
        data.fireFee = state.data.freeFireFee // 火災保険料
        data.earthquakeBuildingFee = state.data.freeEarthquakeBuildingFee // 地震保険建物保険料
        data.earthquakeHouseholdFee = state.data.freeEarthquakeHouseholdFee // 地震保険家財保険料
        data.earthquakeFee = state.data.freeEarthquakeFee // 地震保険料
        data.totalFee = state.data.freeTotalFee // 合計保険料
      }
      commit(MUTATIONS.MYAPP_SET_DATA, data)
    },
    /**
     * フリープランオプション設定
     */
    [ACTIONS.MYAPP_SET_ESTIMATE_OPTION] ({ commit }, options) {
      commit(MUTATIONS.MYAPP_SET_DATA, options)
    },
    /**
     * 明記物件明細書入力画面
     */
    async [ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_INIT] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_INIT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0032_API.retrieveMeikiArticle(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_INIT, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 明記物件明細書入力画面の入力完了
     */
    async [ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_COMPLETED] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_COMPLETED
      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0032_API.entrySaveMeikiArticle(request.params)
        .then(function (response) {
          // BK
          commit(MUTATIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_COMPLETED, request.specificationArticleData)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 他契約有無確認画面の確定
     */
    async [ACTIONS.MYAPP_WITH_OTHER_CONFIRM] ({ state, commit }, request) {
      const inputData = cloneDeep(request)
      // 日付
      if (!util.isEmptyOrUndef(inputData.dueDateFirstYear) || !util.isEmptyOrUndef(inputData.dueDateFirstMonth) || !util.isEmptyOrUndef(inputData.dueDateFirstDay)) {
        inputData.dueDateFirst = util.date(inputData.dueDateFirstYear, inputData.dueDateFirstMonth, inputData.dueDateFirstDay)
      }
      if (!util.isEmptyOrUndef(inputData.dueDateSecondYear) || !util.isEmptyOrUndef(inputData.dueDateSecondMonth) || !util.isEmptyOrUndef(inputData.dueDateSecondDay)) {
        inputData.dueDateSecond = util.date(inputData.dueDateSecondYear, inputData.dueDateSecondMonth, inputData.dueDateSecondDay)
      }
      // 万円から千円へ
      // inputData.basicInsuranceAmountFirst = util.parse.manToSenNumber(inputData.basicInsuranceAmountFirst)
      // inputData.earthquakeInsuranceAmountFirst = util.parse.manToSenNumber(inputData.earthquakeInsuranceAmountFirst)
      // inputData.basicInsuranceAmountSecond = util.parse.manToSenNumber(inputData.basicInsuranceAmountSecond)
      // inputData.earthquakeInsuranceAmountSecond = util.parse.manToSenNumber(inputData.earthquakeInsuranceAmountSecond)

      const myAction = ACTIONS.MYAPP_WITH_OTHER_CONFIRM

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0036_API.otherContractInfo(inputData)
        .then(function (response) {
          const payload = {}
          payload.reponse = response
          payload.inputData = inputData
          commit(MUTATIONS.MYAPP_WITH_OTHER_CONFIRM, payload)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    [ACTIONS.SET_CONFIRM_TERM_CLEAR_FLAG] ({ state, commit }, payload) {
      commit(MUTATIONS.SET_CONFIRM_TERM_CLEAR_FLAG, payload)
    },
    [ACTIONS.SET_SPECIFICATION_ARTICLE_INPUT_CHANGE_FLAG] ({ state, commit }, payload) {
      commit(MUTATIONS.SET_SPECIFICATION_ARTICLE_INPUT_CHANGE_FLAG, payload)
    },
    /**
     * G-NHA-010_内容確認画面
     */
    async [ACTIONS.MYAPP_SEARCH_RECRUITMENT] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SEARCH_RECRUITMENT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0031_API.readBosyuninName(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_SEARCH_RECRUITMENT, response)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    [ACTIONS.MYAPP_SET_RECRUITMENT_ID] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_SET_RECRUITMENT_ID, data)
    },
    [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_ADD] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_ADD, data)
    },
    [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_REMOVE] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_REMOVE, data)
    },
    [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CACHE_CLEAR] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CACHE_CLEAR, data)
    },
    [ACTIONS.MYAPP_CONTRACTORNAME] ({ state, commit }, data) {
      commit(MUTATIONS.MYAPP_CONTRACTORNAME, data)
    },
    /**
     * 口座情報入力画面
     */
    async [ACTIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0042_API.entrySaveTop(request)
        .then(function (response) {
          request.response = response
          commit(MUTATIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API, request)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 口座情報入力画面 戻る場合一時保存
     */
    async [ACTIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API_TEMP] ({ state, commit }, request) {
      commit(MUTATIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API_TEMP, request)
    },
    /**
     * 代理店分担入力画面の入力完了
     */
    async [ACTIONS.MYAPP_AGENT_SHARE_INPUT_COMPLETED] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_AGENT_SHARE_INPUT_COMPLETED

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 入力データをstateへ保存
      commit(MUTATIONS.MYAPP_AGENT_SHARE_INPUT_SET_TEMP_DATA, request.params)
      // 実行
      await NHA_O_0030_API.agentShareInputCompleted(request.params)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_AGENT_SHARE_INPUT_COMPLETED, response)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 代理店分担入力画面 代理店を絞る
     */
    async [ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST] ({ state, commit }, payload) {
      const myAction = ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      if (!payload.storeCode) {
        commit(MUTATIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST, {pattern: payload.pattern, data: []})
        return
      }
      // 実行
      await NHA_O_0038_API.lrisDariCdList({ storeCode: payload.storeCode })
        .then(function (response) {
          commit(MUTATIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST, {pattern: payload.pattern, data: response.data})
          console.log('set data commpleted!')
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 申込情報画面 代理店取得
     */
    async [ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW] ({ state, commit }, payload) {
      const myAction = ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      console.log('1 agentCode = ', payload.agentCode)
      await NHA_O_0038_API.lrisDariCdListNew({ agentCode: payload.agentCode })
        .then(function (response) {
          commit(MUTATIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW, {pattern: payload.pattern, data: response.data})
          console.log('set data commpleted by cheng!')
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 販売できる特約を取得する。
     */
    async [ACTIONS.MYAPP_ESTIMATE_OPTION_INIT] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_ESTIMATE_OPTION_INIT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0029_API.readTokuList(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_ESTIMATE_OPTION_INIT, response)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 引受制限を判定する
     */
    async [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CHECK] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CHECK

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0039_API.acceptLimitCheck(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CHECK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 引受制限入力された決定番号を保存する
     */
    async [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0039_API.acceptLimitUpdateItem(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE, {listData: state.acceptLimitList, confirmData: request})
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 引受制限入力された決定番号をクリアする
     */
    async [ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }

      // 実行
      await NHA_O_0039_API.acceptLimitClearItem(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * 申込依頼口振
     */
    async [ACTIONS.MYAPP_ENTRY_REQUEST_ACCOUNT] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_ENTRY_REQUEST_ACCOUNT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0043_API.entryRequestAccount(request)
        .then(function (response) {
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * Bank検索
     */
    async [ACTIONS.MYAPP_BANK_SEARCH] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_BANK_SEARCH

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0044_API.searchBank(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_BANK_SEARCH_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ログイン
     */
    async [ACTIONS.MYAPP_USER_LOGIN] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_LOGIN

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0001_API.userLogin(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_LOGIN_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * album
     */
    async [ACTIONS.MYAPP_USER_ALBUM] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_ALBUM

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0150_API.album(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_ALBUM_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ユーザー
     */
    [ACTIONS.MYAPP_GET_USER_INFO] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_GET_USER_INFO

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      NHA_O_0155_API.getUserInfo(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_INFO_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * albumCreate
     */
    async [ACTIONS.MYAPP_ALBUMCREATE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_ALBUMCREATE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0151_API.albumCreate(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_ALBUMCREATE_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * albumRemove
     */
    async [ACTIONS.MYAPP_ALBUM_REMOVE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_ALBUM_REMOVE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0153_API.albumRemove(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_ALBUM_REMOVE_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * riyo
     */
    async [ACTIONS.MYAPP_USER_RIYO] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_RIYO
      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0152_API.riyo(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_RIYO_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * riyoeff
     */
    async [ACTIONS.MYAPP_USER_RIYOEFF] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_RIYOEFF
      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0154_API.riyoEff(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_RIYOEFF_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * imageUpload
     */
    async [ACTIONS.MYAPP_IMAGE_UPLOAD] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_IMAGE_UPLOAD
      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      console.log('z01')
      console.log(request)
      const multipartRequest = new FormData()
      for (const key in request) {
        multipartRequest.append(key, request[key])
      }
      // 実行
      await NHA_O_0010_API.imageUpload(multipartRequest)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_LOGIN_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ユーザー管理
     */
    async [ACTIONS.MYAPP_USER_KANRI] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_KANRI

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0110_API.getUserkanriInfo(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_KANRI_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ユーザーCREATE
     */
    async [ACTIONS.MYAPP_USER_CREATE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_CREATE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0111_API.usercreate(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_CREATE_OK, request)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ユーザーinsert
     */
    async [ACTIONS.MYAPP_USER_INSERT] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_INSERT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0112_API.userinsert(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_INSERT_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    },
    /**
     * ユーザーdelete
     */
    async [ACTIONS.MYAPP_USER_DELETE] ({ state, commit }, request) {
      const myAction = ACTIONS.MYAPP_USER_DELETE

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 実行
      await NHA_O_0113_API.userdelete(request)
        .then(function (response) {
          commit(MUTATIONS.MYAPP_USER_DELETE_OK, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    }
  },
  mutations: {
    // 見積連番一覧に関する方法
    [MUTATIONS.MYAPP_READ_ENTRY_NO_LIST] (state, data) {
      state.entryNoList = data.list
      state.totalSize = data.count
    },
    // 見積連番一覧に関する方法
    [MUTATIONS.CLEAR_ENTRY_NO_LIST] (state) {
      state.entryNoList = []
      state.totalSize = 0
      state.entryNo = ''
    },
    // 見積連番一覧に関する方法
    [MUTATIONS.MYAPP_SET_ENTRY_NO] (state, data) {
      state.entryNoList = data
      if (state.entryNoList && state.entryNoList.entryNo) {
        state.entryNo = state.entryNoList.entryNo
      } else {
        state.entryNo = ''
      }
    },
    [MUTATIONS.MYAPP_BANK_SEARCH_OK] (state, data) {
      if ((data.params) && (data.params.policyNo === '1')) {
        state.bankitems.splice(0, state.bankitems.length)
        state.bankitems = cloneDeep(data.list)
        console.log('search OK')
      } else {
        state.subbankitems.splice(0, state.subbankitems.length)
        state.subbankitems = cloneDeep(data.list)
        console.log('sub search OK')
      }
    },
    [MUTATIONS.MYAPP_USER_LOGIN_OK] (state, data) {
      state.userName = cloneDeep(data.userName)
      state.kengen = cloneDeep(data.kengen)
      console.log('state.userName:' + state.userName)
    },
    [MUTATIONS.MYAPP_USER_ALBUM_OK] (state, data) {
      state.albums = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },
    [MUTATIONS.MYAPP_USER_INFO_OK] (state, data) {
      state.userInfo = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },

    [MUTATIONS.MYAPP_ALBUMCREATE_OK] (state, data) {
      state.albumsCreate = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },
    [MUTATIONS.MYAPP_ALBUM_REMOVE_OK] (state, data) {
      state.albums = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },

    [MUTATIONS.MYAPP_USER_RIYO_OK] (state, data) {
      state.riyos = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },

    [MUTATIONS.MYAPP_USER_RIYOEFF_OK] (state, data) {
      state.riyos = cloneDeep(data)
      // console.log('state.userName:' + state.userName)
    },

    [MUTATIONS.MYAPP_USER_KANRI_OK] (state, data) {
      state.userkanriItems = cloneDeep(data)
      console.log('state.userName:' + state.userName)
    },
    [MUTATIONS.MYAPP_BANK_SET] (state, data) {
      state.selecteditem = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_SYNC] (state, sync) {
      state.sync = Object.assign(state.sync, cloneDeep(sync))
    },
    [MUTATIONS.MYAPP_SET_ENTRY_TYPE] (state, data) {
      state.entryType = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_POLICY_NO] (state, data) {
      state.data.policy = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_AGENT_CODE] (state, response) {
      state.data.agentCode = response.data
      console.log('state.agentCode=' + state.data.agentCode)
    },
    [MUTATIONS.MYAPP_SET_DATA] (state, data) {
      state.data = Object.assign(state.data, cloneDeep(data))
    },
    [MUTATIONS.MYAPP_SET_BEFORE_CORRECTION] (state, data) {
      state.dataBeforeCorrection = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_DATA_APPRAISAL] (state, data) {
      state.dataAppraisal = cloneDeep(data)
      if (!util.isEmptyOrUndef(state.dataAppraisal.entryNo)) {
        state.dataAppraisalNotNull = true
      }
    },
    [MUTATIONS.MYAPP_SET_UPLOAD_FILE_INFO] (state, data) {
      state.fileList = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_ALERT_INFO] (state, data) {
      state.alertInfo = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_ESTIMATEDDATA] (state, data) {
      state.estimatedData = Object.assign(state.estimatedData, cloneDeep(data))
    },
    [MUTATIONS.MYAPP_SET_ADDRESSDATA] (state, data) {
      state.addressData = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_SET_SENDFLAGDATA] (state, data) {
      state.sendFlagData = cloneDeep(data)
    },
    [MUTATIONS.MYAPP_USER_CREATE_OK] (state, data) {
      state.userInfo.furiganase = data.furiganase
      state.userInfo.furiganame = data.furiganame
      state.userInfo.kanjise = data.kanjise
      state.userInfo.kanjime = data.kanjime
    },
    [MUTATIONS.MYAPP_CLEAR_DATA] (state) {
      state.data = new EntryData()
      state.dataBeforeCorrection = {}
      state.dataAppraisal = {}
      state.dataAppraisalNotNull = false
      state.fileList = []
      state.alertInfo = {}
      state.estimatedData = new EstimatedData()
      state.addressData = []
      state.sendFlagData = {}
      state.acceptLimitConfirmData = {}
    },
    [MUTATIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_INIT] (state, data) {
      state.specificationArticleData = data
    },
    [MUTATIONS.MYAPP_SPECIFICATION_ARTICLE_INPUT_COMPLETED] (state, data) {
      // const clone = cloneDeep(data)
      // for (const item of clone) {
      //   item.type = undefined
      // }
      // state.specificationArticleData = clone
    },
    [MUTATIONS.MYAPP_AGENT_SHARE_INPUT_COMPLETED] (state, data) {
    },
    [MUTATIONS.MYAPP_WITH_OTHER_CONFIRM] (state, payload) {
      const reponse = payload.reponse
      state.withOtherAgreeData.confirmTermClearFlag = reponse.data.confirmTermClearFlag
      // if (reponse.data.confirmTermClearFlag === '1') {
      //   // 火災保険期間
      //   if (state.data.fireTerm) {
      //     state.data.fireTerm = null
      //   }
      // }

      const inputData = payload.inputData
      state.data.rakutenSonpoFirst = inputData.rakutenSonpoFirst
      state.data.insuranceTypeKanaFirst = inputData.insuranceTypeKanaFirst
      state.data.insuranceCompanyKanaFirst = inputData.insuranceCompanyKanaFirst
      state.data.insuranceTargetFirst = inputData.insuranceTargetFirst
      state.data.basicInsuranceAmountFirst = inputData.basicInsuranceAmountFirst
      state.data.earthquakeInsuranceAmountFirst = inputData.earthquakeInsuranceAmountFirst
      state.data.dueDateFirst = inputData.dueDateFirst
      state.data.withSecondOtherContract = inputData.withSecondOtherContract
      state.data.rakutenSonpoSecond = inputData.rakutenSonpoSecond
      state.data.insuranceTypeKanaSecond = inputData.insuranceTypeKanaSecond
      state.data.insuranceCompanyKanaSecond = inputData.insuranceCompanyKanaSecond
      state.data.insuranceTargetSecond = inputData.insuranceTargetSecond
      state.data.basicInsuranceAmountSecond = inputData.basicInsuranceAmountSecond
      state.data.earthquakeInsuranceAmountSecond = inputData.earthquakeInsuranceAmountSecond
      state.data.dueDateSecond = inputData.dueDateSecond
      if (!util.isEmptyOrUndef(inputData.rakutenSonpoFirst)) {
        state.withOtherAgreeData.saveSuccessFlag = true
      } else {
        state.withOtherAgreeData.saveSuccessFlag = false
      }
    },
    [MUTATIONS.SET_CONFIRM_TERM_CLEAR_FLAG] (state, payload) {
      state.withOtherAgreeData.confirmTermClearFlag = payload
    },
    [MUTATIONS.SET_SPECIFICATION_ARTICLE_INPUT_CHANGE_FLAG] (state, payload) {
      state.specificationArticleDataChangeFlag = payload
    },
    [MUTATIONS.MYAPP_SEARCH_RECRUITMENT] (state, response) {
      state.searchRecruitmentIdData = response.data
      if (state.searchRecruitmentIdData.list.length === 1) {
        state.selectedRecruitment = state.searchRecruitmentIdData.list[0]
        state.data.recruitmentID = state.selectedRecruitment.recruitmentID
        state.data.recruitmentName = state.selectedRecruitment.recruitmentName
        state.data.recruitmentNameKana = state.selectedRecruitment.recruitmentNameKana
      }
    },
    [MUTATIONS.MYAPP_SET_RECRUITMENT_ID] (state, data) {
      state.selectedRecruitment = data
      if (state.selectedRecruitment && state.selectedRecruitment.recruitmentID) {
        state.data.recruitmentID = state.selectedRecruitment.recruitmentID
        state.data.recruitmentName = state.selectedRecruitment.recruitmentName
        state.data.recruitmentNameKana = state.selectedRecruitment.recruitmentNameKana
      } else {
        state.data.recruitmentID = ''
        state.data.recruitmentName = ''
        state.data.recruitmentNameKana = ''
      }
    },
    [MUTATIONS.MYAPP_SET_SHOW_AGENTSHAREINPUT] (state, payload) {
      state.showAgentShareInput = payload
    },
    [MUTATIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST] (state, payload) {
      if (payload.pattern === 1) {
        state.agentShareInputData.agentCodeList1 = payload.data.list
      } else if (payload.pattern === 2) {
        state.agentShareInputData.agentCodeList2 = payload.data.list
      } else {
        state.agentShareInputData.agentCodeList3 = payload.data.list
        state.agentShareInputData.sectionName = payload.data.sectionName
      }
    },
    // 申込情報画面 代理店取得
    [MUTATIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW] (state, payload) {
      console.log('2 payload=', payload)
      if (payload.pattern === 1) {
        state.agentShareInputData.agentCodeList1 = payload.data.list
      } else if (payload.pattern === 2) {
        state.agentShareInputData.agentCodeList2 = payload.data.list
      } else {
        state.agentShareInputData.agentCodeList3 = payload.data.list
        state.agentShareInputData.sectionName = payload.data.sectionName
      }
    },
    [MUTATIONS.MYAPP_AGENT_SHARE_INPUT_SET_TEMP_DATA] (state, payload) {
      // 課店コード１（非幹事）
      state.data.noneManagerStoreCode1 = payload.noneManagerStoreCode1
      // 代理店コード１（非幹事）
      state.data.noneManagerAgentCode1 = payload.noneManagerAgentCode1
      // 自己特定１（非幹事）
      state.data.noneManagerSelfSpecific1 = payload.noneManagerSelfSpecific1
      // 分担割合１（非幹事）
      state.data.noneManagerProportion1 = payload.noneManagerProportion1
      // 課店コード２（非幹事）
      state.data.noneManagerStoreCode2 = payload.noneManagerStoreCode2
      // 代理店コード２（非幹事）
      state.data.noneManagerAgentCode2 = payload.noneManagerAgentCode2
      // 自己特定２（非幹事）
      state.data.noneManagerSelfSpecific2 = payload.noneManagerSelfSpecific2
      // 分担割合２（非幹事）
      state.data.noneManagerProportion2 = payload.noneManagerProportion2
    },
    [MUTATIONS.MYAPP_AGENT_SHARE_INPUT_INIT] (state, data) {
      // 課店コード（幹事）
      state.data.salesCode = data.salesCode
      // 代理店コード（幹事）
      state.data.agentCode = data.agentCode
      // 自己特定（幹事）
      state.data.selfSpecific = data.selfSpecific
      // 代理店名称（幹事）
      state.data.agentName = data.agentName
    },
    [MUTATIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API] (state, request) {
      state.data.entryNo = request.response.data.entryNo
      state.data.bankType = request.bankType
      state.data.financialInstitutionCode = request.financialInstitutionCode
      state.data.ginkoNmKnj = request.ginkoNmKnj // 銀行名（漢字） (GINKO_NM_KNJ)
      state.data.ginkoNmKna = request.ginkoNmKna // 銀行名（カナ） (GINKO_NM_KNA)
      state.data.ginkoShitenNmKnj = request.ginkoShitenNmKnj // 銀行支店名（漢字(GINKO_SHITEN_NM_KNJ)
      state.data.ginkoShitenNmKna = request.ginkoShitenNmKna
      state.data.subject = util.parse.int(request.subject)
      state.data.accountHolderKana = request.accountHolderKana
      state.data.transferredNotification = util.parse.int(request.transferredNotification)
      state.data.shopNo = request.shopNo
      state.data.accountNo = request.accountNo
      state.data.sign = request.sign
      state.data.number = request.number
      state.data.accountHolderKanaYutyo = request.accountHolderKanaYutyo
      state.data.transferredNotificationYutyo = util.parse.int(request.transferredNotificationYutyo)
      state.data.requestFormInstallationOmission = util.parse.int(request.requestFormInstallationOmission)
      console.log(request.accountHolderKana)
      console.log(request.accountHolderKanaYutyo)
      if (request.bankType === 1) {
        state.data.accountHolderKanji = request.accountHolderKanji
        console.log(request.accountHolderKanji)
      } else {
        state.data.accountHolderKanji = request.accountHolderKanjiYutyo
        console.log(request.accountHolderKanjiYutyo)
      }
    },
    [MUTATIONS.MYAPP_ENTRYACCOUNTTRANSFER_GET_API_TEMP] (state, request) {
      state.data.bankType = request.bankType
      state.data.financialInstitutionCode = request.financialInstitutionCode
      state.data.ginkoNmKnj = request.ginkoNmKnj // 銀行名（漢字） (GINKO_NM_KNJ)
      state.data.ginkoNmKna = request.ginkoNmKna // 銀行名（カナ） (GINKO_NM_KNA)
      state.data.ginkoShitenNmKnj = request.ginkoShitenNmKnj // 銀行支店名（漢字(GINKO_SHITEN_NM_KNJ)
      state.data.ginkoShitenNmKna = request.ginkoShitenNmKna
      state.data.subject = util.parse.int(request.subject)
      state.data.accountHolderKana = request.accountHolderKana
      state.data.transferredNotification = util.parse.int(request.transferredNotification)
      state.data.shopNo = request.shopNo
      state.data.accountNo = request.accountNo
      state.data.sign = request.sign
      state.data.number = request.number
      state.data.accountHolderKanaYutyo = request.accountHolderKanaYutyo
      state.data.transferredNotificationYutyo = util.parse.int(request.transferredNotificationYutyo)
      console.log(request.accountHolderKana)
      console.log(request.accountHolderKanaYutyo)
      if (request.bankType === 1) {
        state.data.accountHolderKanji = request.accountHolderKanji
        console.log(request.accountHolderKanji)
      } else {
        state.data.accountHolderKanji = request.accountHolderKanjiYutyo
        console.log(request.accountHolderKanjiYutyo)
      }
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CHECK] (state, request) {
      state.acceptLimitList = request.list
      state.acceptLimitHitRules = []
      if (!util.isEmptyOrUndef(request.list) && request.list.length === 0) {
        // 制限なしで、処理なし
      } else {
        state.acceptLimitList.forEach((item, index) => {
          // 制限IDを追加する
          state.acceptLimitHitRules.push(item.acceptLimitId)
        })
      }
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE] (state, request) {
      state.acceptLimitConfirmList = request.listData
      state.acceptLimitConfirmData = request.confirmData
      state.data.restrictionCode = request.confirmData.seigenCd
      console.log('data.restrictionCode:', state.data.restrictionCode)
      state.data.decisionNo = request.confirmData.ketteiNo
      console.log('data.decisionNo:', state.data.decisionNo)
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_CLEAR] (state) {
      state.acceptLimitConfirmList = []
      state.acceptLimitConfirmData = {seigenCd: '', ketteiNo: ''}
    },
    [MUTATIONS.MYAPP_ESTIMATE_OPTION_INIT] (state, payload) {
      // 販売できる特約リスト
      state.data.withSaleCanList = payload.data.result.list
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_CACHE_CLEAR] (state, payload) {
      state.acceptLimitList = []
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_ADD] (state, payload) {
      if (state.acceptLimitHitRules.includes(payload)) {
        // Do nothing (already existed)
      } else {
        state.acceptLimitHitRules.push(payload)
      }
    },
    [MUTATIONS.MYAPP_SVR_ACCEPT_LIMIT_RULE_REMOVE] (state, payload) {
      if (state.acceptLimitHitRules.includes(payload)) {
        let idx = state.acceptLimitHitRules.indexOf(payload)
        state.acceptLimitHitRules.splice(idx, 1)
      } else {
        // Do nothing when nothing found
      }
    },
    [MUTATIONS.MYAPP_BANK_PRINT_FLAG] (state, payload) {
      state.isprinted = payload
    },
    [MUTATIONS.MYAPP_ENTRYCREDITCARDCONFIRMED] (state, payload) {
      state.entryCreditCardConfirmed = payload
    },
    [MUTATIONS.MYAPP_CONTRACTORNAME] (state, payload) {
      state.data.contractorName = payload
    }
  }
}
