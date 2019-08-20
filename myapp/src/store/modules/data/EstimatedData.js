/* eslint-disable no-multi-spaces */
/**
 * NHA_O_0003 見積書
 *
 * （API定義に、画面で使用する項目を拡張）
 */
export default () => {
  return {
    mode: null, // 処理モード
    mail: null, // メールアドレス
    createDate: null, // 作成日
    entryNo: null, // 申込依頼No
    selectPlanText: null,
    agentName: null, // 代理店名称
    agentCode: null, // 代理店コード
    fireBuildingAmount: null, // 火災保険建物保険金額
    fireHouseholdAmount: null, // 火災保険家財保険金額
    equipmentAmount: null, // 設備什器保険金額
    productAmount: null, // 商品製品保険金額
    specificationArticleAmount: null, // 明記物件保険金額
    earthquakeBuildingAmount: null, // 地震保険建物保険金額
    earthquakeHouseholdAmount: null, // 地震保険家財保険金額
    fireStartDate: null,  // 火災保険始期日
    fireEndDate: null, // 火災保険終期日
    fireTerm: null, // 火災保険期間
    earthquakeStartDate: null,  // 地震保険始期日
    earthquakeEndDate: null, // 地震保険終期日
    earthquakeTerm: null, // 地震保険期間
    objectLocation: null,  // 保険対象所在地
    usageJob: null,  // 用法・職作業
    ownership: null,  // 所有関係
    buildingType: null,  // 建物種類・性能
    structureGrade: null, // 構造級別
    area: null,  // 面積
    buildingDate: null,  // 建築年月
    discountIncrease: null,  // 割増引
    withFireCompensation: null, // 火災、落雷、破裂または爆発補償有無
    withWindCompensation: null, // 風災・雹災・雪災補償有無
    windCopayment: null,  // 風災・雹災・雪災自己負担額
    withWaterCompensation: null, // 水災補償有無
    withWaterStainedCompensation: null, // 水濡れ・盗難等補償有無
    withCorruptionCompensation: null, // 破損・汚損補償有無
    corruptionCopayment: null, // 破損・汚損等自己負担額
    corruptionHouseholdLimited: null, // 破損・汚損等家財支払限度額
    withDisasterExpenses: null, // 災害時諸費用_有無
    disasterExpensesLimited: null, // 災害時諸費用_支払限度額
    withEarthquakeExpenses: null, // 地震火災費用_有無
    withWaterPipeRepairCost: null, // 水道管修理費用_有無
    withTemporaryHouseCost: null, // 緊急時仮住い費用_有無
    withLockRepairCost: null, // 錠前交換費用_有無
    withSpecialCost: null, // 特別費用_有無
    withDamagePreventionCost: null, // 損害防止費用_有無
    withEarthquake: null, // 地震・噴火・津波_有無
    withPersonalLiability: null, // 個人賠償責任補償_有無
    personalLiabilityLimited: null,  // 個人賠償責任補償_支払限度額
    withTenantLiability: null, // 借家人賠償責任補償_有無
    tenantLiabilityLimited: null,  // 借家人賠償責任補償_支払限度額
    withBuildingManageLiability: null, // 建物管理賠償責任補償_有無
    buildingManageLiabilityLimited: null, // 建物管理賠償責任補償_支払限度額
    withExposureCompensation: null, // 類焼損害補償_有無
    exposureCompensationLimited: null,  // 類焼損害補償_支払限度額
    otherContract: null,  // その他特約
    paymentMethod: null,  // 払込方法
    collectMethod: null,  // 集金方法
    fireFee: null, // 火災保険料
    earthquakeFee: null, // 地震保険料
    totalFee: null, // 合計保険料
    annualFee: null,  // 年間保険料
    memo: null,  // メモ
    messageCode: null,  // メッセージコード
    messageDesc: null  // メッセージ詳細
  }
}
