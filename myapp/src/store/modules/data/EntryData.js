/* eslint-disable no-multi-spaces */
/**
 * NHA_O_0001 申込一時保存読込
 *
 * （API定義に、画面で使用する項目を拡張）
 */
export default () => {
  return {
    // 『API NHA_O_0001 申込一時保存読込』で読み込む項目
    entryNo: null,                                               // 申込依頼No
    updateTime: null,                                            // 更新日時
    screenID: null,                                              // 一時保存画面ID
    entryStatus: null,                                           // 申込ステータス（1:申込中、2:点検依頼、3:訂正依頼済、4:点検完了）
    entryType: '2',                                             // 申込区分（1:インターネット契約、2:ペーパレス募集 ※Phase1では1固定）
    paymentType: null,                                           // 支払区分（2:口座振替、3:クレカ決済 ※Phase1では3固定）
    startDate: null,                                             // 保険始期日
    fireEndDate: null,                                           // 火災保険終期日
    earthquakeEndDate: null,                                     // 地震保険終期日
    buildingOwnership: null,                                     // 建物所有関係（1:所有、2:賃貸）
    buildingFrom: null,                                          // 建物形態（1:一戸建て、2:マンション、アパート、3:マンション（一棟））
    buildingFloor: null,                                         // 建物階数
    basementFloor: null,                                         // 地下階数
    residentialFloor: null,                                      // 居住階数
    buildingStructure: null,                                     // 建物構造（1:コンクリート造、2:コンクリートブロック造、3:れんが造、4:石造､5:鉄骨造、6:その他）
    steelBuildingType: null,                                     // 鉄骨造建物種類詳細（1:耐火建築物、2:耐火構造建築物、3:鉄骨造）
    otherBuildingType: null,                                     // その他建物種類詳細（1:耐火建築物、2:耐火構造建築物、3:準耐火建築物､4:省令準耐火建物、5:特定避難時間倒壊等防止建築物、6:その他）
    structureGrade: null,                                        // 構造級別（T:T構造、H:H構造、M:M構造）
    structureConfirmed: null,                                    // 構造確認済み（1:確認済み）
    buildingLocation: null,                                      // 建物所在地
    buildingDate: null,                                          // 建物建築年月
    buildingArea: null,                                          // 建物占有面積
    documentsConfirmed: null,                                    // 書類提出確認済み（1:確認済み）
    withBuildingFireInsurance: null,                             // 建物火災保険加入有無（1:加入する、2:加入しない）
    withNewBuildingValueKnown: null,                             // 新築時の建築価額通知有無（1:分かる、2:分からない）
    policyCurrentReplacementValue: null,                         // 協定再調達価額
    fenceValue: null,                                            // 門・塀・車庫価額
    newBuildingValue: null,                                      // 新築時の建築価額
    apartmentClassification: null,                               // マンション評価基準（1:上塗基準、2:壁芯基準）
    withHouseholdFireInsurance: null,                            // 家財火災保険加入有無（1:加入する、2:加入しない）
    householderAge: null,                                        // 世帯主年令
    numberOfChildren: null,                                      // 子供人数
    withSpouse: null,                                            // 配偶者有無（1:有り、2:無し）
    housemates: null,                                            // 同居人人数
    buildingAppraisedLower: null,                                // 建物評価額（下限）
    buildingAppraisedUpper: null,                                // 建物評価額（上限）
    householdAppraisedLower: null,                               // 家財評価額（下限）
    householdAppraisedUpper: null,                               // 家財評価額（上限）
    withBuildingEarthquakeInsurance: null,                       // 建物地震保険加入有無（1:加入する、2:加入しない）
    withHouseholdEarthquakeInsurance: null,                      // 家財地震保険加入有無（1:加入する、2:加入しない）
    confirmEarthquakeDiscount: null,                             // 地震保険割引確認（1:書類提出できない（建築年割引無）、2:免震建築物割引、3:耐震等級割引、4:耐震診断割引、５:書類提出できない（建築年割引有））
    earthquakeInsuranceDiscountPercent: null,                    // 地震保険割引率
    seismicGradeDiscountGrade: null,                             // 耐震等級割引等級（1:等級1、2:等級2、3:等級3）
    seismicDiagnosisDate: null,                                  // 耐震診断年月日
    buildingDateConfirmed: null,                                 // 建築年月確認済み（1:確認済み） ※画面の「地震保険割引適用条件確認」の事
    discountCertificateConfirmed: null,                          // 割引証明書類注意事項確認済み（1:確認済み）
    includFoundationWork: null,                                  // 基礎工事含む（1:含む、2:含まない）
    includJoinery: null,                                         // 畳・建具等含む（1:含む、2:含まない）
    includFence: null,                                           // 門・塀・垣含む（1:含む、2:含まない）
    includGarage: null,                                          // 物置車庫等含む（1:含む、2:含まない）
    includShared: null,                                          // 共用部分含む（1:含む、2:含まない）
    fireTerm: null,                                              // 火災保険期間
    earthquakeTerm: null,                                        // 地震保険期間
    earthquakeAutomaticContinuation: null,                       // 地震自動継続#N/A
    selectPlan: null,                                            // 選択プラン（1:おすすめプラン、2:フリープラン）
    advanceWithFireCompensation: null,                           // おすすめプラン火災・落雷・破裂・爆発補償有無（1:あり、2:なし）
    advanceWithWindCompensation: null,                           // おすすめプラン風災・ひょう災・雪災補償有無（1:あり、2:なし）
    advanceWindCopayment: null,                                  // おすすめプラン風災・ひょう災・雪災自己負担額
    advanceWithWaterCompensation: null,                          // おすすめプラン水災補償有無（1:あり、2:なし）
    advanceWithWaterStainedCompensation: null,                   // おすすめプラン水濡れ・盗難補償有無（1:あり、2:なし）
    advanceWithCorruptionCompensation: null,                     // おすすめプラン破損・汚損等補償有無（1:あり、2:なし）
    advanceCorruptionCopayment: null,                            // おすすめプラン破損・汚損等自己負担額
    advanceCorruptionHouseholdLimited: null,                     // おすすめプラン破損・汚損等家財支払限度額
    advanceWithDisasterExpensesCompensation: null,               // おすすめプラン災害時諸費用補償有無（1:あり、2:なし）
    advanceDisasterExpensesLimited: null,                        // おすすめプラン災害時諸費用支払限度額
    advanceWithEarthquakeCompensationBuilding: null,             // おすすめプラン地震・噴火・津波補償有無（建物）（1:あり、2:なし）
    advanceWithEarthquakeCompensationHousehold: null,            // おすすめプラン地震・噴火・津波補償有無（家財）（1:あり、2:なし）
    advanceWithExpenseCompensation: null,                        // おすすめプラン費用保険金補償有無（1:あり、2:なし）
    advanceWithPersonalLiability: null,                          // おすすめプラン個人賠償責任補償特約有無（1:あり、2:なし）
    advanceWithTenantLiability: null,                            // おすすめプラン借家人賠償責任補償特約有無（1:あり、2:なし）
    advanceTenantLiabilityLimited: null,                         // おすすめプラン借家人賠償責任補償特約支払限度額
    advanceWithBuildingManageLiability: null,                    // おすすめプラン建物管理賠償責任補償特約有無（1:あり、2:なし）
    advanceBuildingManageLiabilityLimited: null,                 // おすすめプラン建物管理賠償責任補償特約支払限度額
    advanceWithExposureCompensation: null,                       // おすすめプラン類焼損害補償特約有無（1:あり、2:なし）
    advanceWithRebuildingCostCompensation: null,                 // おすすめプラン建替費用補償特約有無（1:あり、2:なし）
    advanceWithCommonRepairCostCompensation: null,               // おすすめプラン共用部分修理費用補償特約有無（1:あり、2:なし）
    advanceWithCrimeCostCompensation: null,                      // おすすめプラン防犯対策費用補償特約有無（1:あり、2:なし）
    advanceWithCorbelHouseholdCompensation: null,                // おすすめプラン持ち出し家財補償特約有無（1:あり、2:なし）
    advanceWithMovingCompensation: null,                         // おすすめプラン引越し中の損害補償特約有無（1:あり、2:なし）
    freeWithFireCompensation: null,                              // フリープラン火災・落雷・破裂・爆発補償有無（1:あり、2:なし）
    freeWithWindCompensation: null,                              // フリープラン風災・ひょう災・雪災補償有無（1:あり、2:なし）
    freeWindCopayment: null,                                     // フリープラン風災・ひょう災・雪災自己負担額
    freeWithWaterCompensation: null,                             // フリープラン水災補償有無（1:あり、2:なし）
    freeWithWaterStainedCompensation: null,                      // フリープラン水濡れ・盗難補償有無（1:あり、2:なし）
    freeWithCorruptionCompensation: null,                        // フリープラン破損・汚損等補償有無（1:あり、2:なし）
    freeCorruptionCopayment: null,                               // フリープラン破損・汚損等自己負担額
    freeCorruptionHouseholdLimited: null,                        // フリープラン破損・汚損等家財支払限度額
    freeWithEarthquakeCompensationBuilding: null,                // フリープラン地震・噴火・津波補償有無（建物）（1:あり、2:なし）
    freeWithEarthquakeCompensationHousehold: null,               // フリープラン地震・噴火・津波補償有無（家財）（1:あり、2:なし）
    freeWithDisasterExpensesCompensation: null,                  // フリープラン災害時諸費用補償有無（1:あり、2:なし）
    freeDisasterExpensesLimited: null,                           // フリープラン災害時諸費用支払限度額
    freeWithExpenseCompensation: null,                           // フリープラン費用保険金補償有無（1:あり、2:なし）
    freeWithPersonalLiability: null,                             // フリープラン個人賠償責任補償特約有無（1:あり、2:なし）
    freeWithTenantLiability: null,                               // フリープラン借家人賠償責任補償特約有無（1:あり、2:なし）
    freeTenantLiabilityLimited: null,                            // フリープラン借家人賠償責任補償特約支払限度額
    freeWithBuildingManageLiability: null,                       // フリープラン建物管理賠償責任補償特約有無（1:あり、2:なし）
    freeBuildingManageLiabilityLimited: null,                    // フリープラン建物管理賠償責任補償特約支払限度額
    freeWithExposureCompensation: null,                          // フリープラン類焼損害補償特約有無（1:あり、2:なし）
    freeWithRebuildingCostCompensation: null,                    // フリープラン建替費用補償特約有無（1:あり、2:なし）
    freeWithCommonRepairCostCompensation: null,                  // フリープラン共用部分修理費用補償特約有無（1:あり、2:なし）
    freeWithCrimeCostCompensation: null,                         // フリープラン防犯対策費用補償特約有無（1:あり、2:なし）
    freeWithCorbelHouseholdCompensation: null,                   // フリープラン持ち出し家財補償特約有無（1:あり、2:なし）
    freeWithMovingCompensation: null,                            // フリープラン引越し中の損害補償特約有無
    freeWithWaterStainedExpensesCompensation: null,              // フリープラン水濡れ原因調査費用補償特約有無
    freeWithWindPaymentMethodContract: null,                     // フリープラン風災等支払方法変更特約有無
    freeWithWaterPaymentMethodContract: null,                    // フリープラン水災支払方法変更特約有無
    fireBuildingAmount: null,                                    // 火災保険建物保険金額
    fireHouseholdAmount: null,                                   // 火災保険家財保険金額
    equipmentAmount: null, // 火災保険設備・什器等保険金額
    goodsAmount: null, // 火災保険商品・製品等保険金額
    specificationArticleAmount: null, // 火災保険明記物件保険金額
    earthquakeBuildingAmount: null,                              // 地震保険建物保険金額
    earthquakeBuildingAmountLower: null,                         // 建物の地震保険保険金額（下限）
    earthquakeBuildingAmountUpper: null,                         // 建物の地震保険保険金額（上限）
    earthquakeHouseholdAmount: null,                             // 地震保険家財保険金額
    earthquakeHouseholdAmountLower: null,                        // 家財の地震保険保険金額（下限）
    earthquakeHouseholdAmountUpper: null,                        // 家財の地震保険保険金額（上限）
    advanceFireBuildingFee: null,                                // おすすめプラン火災保険建物保険料
    advanceFireHouseholdFee: null,                               // おすすめプラン火災保険家財保険料
    advanceEquipmentFee: null, // おすすめプラン設備什器保険料
    advanceGoodsFee: null, // おすすめプラン商品製品保険料
    advanceSpecificationArticleFee: null, // おすすめプラン明記物件保険料
    advancePersonalLiabilityFee: null, // おすすめプラン個人賠償保険料
    advanceTenantLiabilityFee: null, // おすすめプラン借家人賠償保険料
    advanceExposureFee: null, // おすすめプラン類焼保険料
    advanceAnnualFee: null, // おすすめプラン年額保険料(火災)
    advanceAnnualPaymentFirstInsuranceFee: null, // おすすめプラン初回保険料(火災)
    advanceEarthquakeAnnualFee: null, // フリープラン年額保険料(地震)
    advanceEarthquakeAnnualPaymentFirstInsuranceFee: null, // フリープラン初回保険料(地震)
    advanceFireFee: null,                                        // おすすめプラン火災保険料
    advanceEarthquakeBuildingFee: null,                          // おすすめプラン地震保険建物保険料
    advanceEarthquakeHouseholdFee: null,                         // おすすめプラン地震保険家財保険料
    advanceEarthquakeFee: null,                                  // おすすめプラン地震保険料
    advanceTotalFee: null,                                       // おすすめプラン合計保険料
    freeFireBuildingFee: null,                                   // フリープラン火災保険建物保険料
    freeFireHouseholdFee: null,                                  // フリープラン火災保険家財保険料
    freeEquipmentFee: null, // フリープラン設備什器保険料
    freeGoodsFee: null, // フリープラン商品製品保険料
    freeSpecificationArticleFee: null, // フリープラン明記物件保険料
    freePersonalLiabilityFee: null, // フリープラン個人賠償保険料
    freeTenantLiabilityFee: null, // フリープラン借家人賠償保険料
    freeExposureFee: null, // フリープラン類焼保険料
    freeAnnualFee: null, // フリープラン年額保険料(火災)
    freeAnnualPaymentFirstInsuranceFee: null, // フリープラン初回保険料(火災)
    // freeEarthquakeAnnualFee: null, // フリープラン年額保険料(地震)
    // freeEarthquakeAnnualPaymentFirstInsuranceFee: null, // フリープラン初回保険料(地震)
    freeFireFee: null,                                           // フリープラン火災保険料
    freeEarthquakeBuildingFee: null,                             // フリープラン地震保険建物保険料
    freeEarthquakeHouseholdFee: null,                            // フリープラン地震保険家財保険料
    freeEarthquakeFee: null,                                     // フリープラン地震保険料
    freeTotalFee: null,                                          // フリープラン合計保険料
    objectAddressSame: null,                                     // 保険対象住所同異（1:同じ、2:異なる）
    objectYubin: null,                                           // 保険対象郵便番号
    objectAddress: null,                                        // 保険対象住所
    objectAddressKana: null,                                    // 保険対象住所カナ
    objectAddressFree: null,                                        // 保険対象住所
    objectAddressKanaFree: null,                                    // 保険対象住所カナ
    contractorName: null,                                        // 契約者氏名
    contractorNameKana: null,                                    // 契約者氏名カナ
    contractorPost: null,                                        // 契約者郵便番号
    contractorAddress: null,                                     // 契約者住所
    contractorAddressKana: null,                                 // 契約者住所カナ
    contractorAddressFree: null,                                 // 契約者住所
    contractorAddressKanaFree: null,                             // 契約者住所カナ
    contractorTelArea: null,                                     // 契約者電話番号ー市外
    contractorTelCity: null,                                     // 契約者電話番号ー市内
    contractorTelNo: null,                                       // 契約者電話番号ー加入番号
    contractorTel2Area: null,                                    // 契約者電話番号2ー市外
    contractorTel2City: null,                                    // 契約者電話番号2ー市内
    contractorTel2No: null,                                      // 契約者電話番号2ー加入番号
    contractorMail: null,                                        // 契約者メールアドレス
    promotionMailSendFlag: null,                                 // プロモーションメール送信フラグ
    contractorSex: null,                                         // 契約者性別
    contractorBirthday: null,                                    // 契約者生年月日
    contractorIdentical: null,                                   // 被保険者同異（1:同じ、2:異なる）
    insuredName: null,                                           // 被保険者氏名
    insuredNameKana: null,                                       // 被保険者氏名カナ
    personalLiabilityName: null,                                 // 個人賠償補償対象者氏名
    personalLiabilityNameKana: null,                             // 個人賠償補償対象者氏名カナ
    tenantCompensationName: null,                                // 借家賠償補償対象者氏名
    tenantCompensationNameKana: null,                            // 借家賠償補償対象者氏名カナ
    confirmContractor: null,                                     // 契約者・被保険者・保険対象所在地確認（1:確認済み）
    confirmBuilding: null,                                       // 保険の対象となる建物情報確認（1:確認済み）
    confirmWithOtherAgree: null,                                 // 他の保険契約等の有無確認（1:確認済み）
    confirmTermPaymentMethod: null,                              // 保険期間・保険料払込方法確認（1:確認済み）
    confirmWithEarthquakeDiscount: null,                         // 地震保険加入有無・割引等確認（1:確認済み）
    confirmCompensation: null,                                   // 補償内容確認（1:確認済み）
    confirmDisclosureStatement: null,                            // 重要事項説明書確認（1:確認済み）
    confirmPrivacyProtection: null,                              // 個人情報取扱同意（1:同意する）
    confirmEarthquake: null,                                     // 地震保険確認（0:地震保険申込無し、1:建物セット無し、2:家財セット無し）
    confirmAccountTransfer: null,                                // 口座情報確認
    documentsConfirmMethod: null,                                // 確認書類提出方法（1:写真アップロード、2:郵送）
    contactField: null,                                          // 訂正内容ご連絡欄
    reviewRequestDate: null,                                     // 審査依頼日
    confirmReviewedContractor: null,                             // 審査後契約者・被保険者・保険対象所在地確認（1:確認済み）
    confirmReviewedBuilding: null,                               // 審査後保険の対象となる建物情報確認（1:確認済み）
    confirmWithReviewedOtherAgree: null,                         // 審査後他の保険契約等の有無確認（1:確認済み）
    confirmReviewedTermPaymentMethod: null,                      // 審査後保険期間・保険料払込方法確認（1:確認済み）
    confirmWithReviewedEarthquakeDiscount: null,                 // 審査後地震保険加入有無・割引等確認（1:確認済み）
    confirmReviewedCompensation: null,                           // 審査後補償内容確認（1:確認済み）
    confirmReviewedDisclosureStatement: null,                    // 審査後重要事項説明書確認（1:確認済み）
    confirmReviewedPrivacyProtection: null,                      // 審査後個人情報取扱同意
    confirmReviewedEarthquake: null,                             // 審査後地震保険確認（0:地震保険申込無し、1:建物セット無し、2:家財セット無し）
    confirmReviewedAccountTransfer: null,                        // 審査後口座情報確認
    agentCode: null,                                             // 代理店コード
    agentName: null,                                             // 代理店名
    withOldContract: null,                                       // 旧保険契約有無（1:あり、2:なし）
    // 『API NHA_O_0008_API 申込依頼』で読み込む項目
    policy: null,                                                // 証券番号

    // local専用の拡張項目
    isCheckedStatus: null,                                       // 点検済かどうか（true:点検済）
    buildingLocationName: null,                                  // 建物所在地（名称）
    earthquakeDiscountKind: null,                                // 地震保険割引の種別（1:1981/05以前、2:1981/06以降）
    withFireCompensation: null,                                  // 火災・落雷・破裂・爆発補償有無（1:あり、2:なし）
    withWindCompensation: null,                                  // 風災・ひょう災・雪災補償有無（1:あり、2:なし）
    windCopayment: null,                                         // 風災・ひょう災・雪災自己負担額
    withWaterCompensation: null,                                 // 水災補償有無（1:あり、2:なし）
    withWaterStainedCompensation: null,                          // 盗難・水濡れ補償有無（1:あり、2:なし）
    withCorruptionCompensation: null,                            // 破損・汚損等補償有無（1:あり、2:なし）
    corruptionCopayment: null,                                   // 破損・汚損等自己負担額
    corruptionHouseholdLimited: null,                            // 破損・汚損等支払限度額
    withEarthquakeCompensation: null,                            // 地震・噴火・津波補償有無（1:あり、2:なし）
    withDisasterExpensesCompensation: null,                      // 災害時諸費用補償有無（1:あり、2:なし）
    disasterExpensesLimited: null,                               // 災害時諸費用支払限度額
    withExpenseCompensation: null,                               // 費用保険金補償有無（1:あり、2:なし）
    withPersonalLiability: null,                                 // 個人賠償責任補償特約有無（1:あり、2:なし）
    withTenantLiability: null,                                   // 借家人賠償責任補償特約有無（1:あり、2:なし）
    tenantLiabilityLimited: null,                                // 借家人賠償責任補償特約支払限度額
    withBuildingManageLiability: null,                           // 建物管理賠償責任補償特約有無（1:あり、2:なし）
    buildingManageLiabilityLimited: null,                        // 建物管理賠償責任補償特約支払限度額
    withExposureCompensation: null,                              // 類焼損害補償特約有無（1:あり、2:なし）
    withRebuildingCostCompensation: null,                        // 建替費用補償特約有無（1:あり、2:なし）
    withCommonRepairCostCompensation: null,                      // 共用部分修理費用補償特約有無（1:あり、2:なし）
    withCrimeCostCompensation: null,                             // 防犯対策費用補償特約有無（1:あり、2:なし）
    withCorbelHouseholdCompensation: null,                       // 持ち出し家財補償特約有無（1:あり、2:なし）
    withMovingCompensation: null,                                // 引越し中の損害補償特約有無（1:あり、2:なし）
    fireBuildingFee: null,                                       // 火災保険建物保険料
    fireHouseholdFee: null,                                      // 火災保険家財保険料
    fireFee: null,                                               // 火災保険料
    earthquakeBuildingFee: null,                                 // 地震保険建物保険料
    earthquakeHouseholdFee: null,                                // 地震保険家財保険料
    earthquakeFee: null,                                         // 地震保険料
    totalFee: null,                                              // 合計保険料

    // local専用の拡張項目（APIから読み込んだ時点の算出結果を保持）
    readonlyWithBuildingEarthquakeInsurance: null,               // 建物地震保険加入有無が読取専用
    readonlyWithHouseholdEarthquakeInsurance: null,              // 家財地震保険加入有無が読取専用

    // PH2追加
    // 他契約有無(keiyaku_other)
    withOtherContract: null,
    // 楽天損保1(rakuten_sonpo1)
    rakutenSonpoFirst: null,
    // 保険種類（カナ）1
    insuranceTypeKanaFirst: null,
    // 保険の会社（カナ）1
    insuranceCompanyKanaFirst: null,
    // 保険の対象1(hoken_taisho1)
    insuranceTargetFirst: null,
    // 基本保険金額1(gaku_kihon_hoken1)
    basicInsuranceAmountFirst: null,
    // 地震保険金額1(gaku_jishin_hoken1)
    earthquakeInsuranceAmountFirst: null,
    // 満期日1(manki_date1)
    dueDateFirst: null,
    // 楽天損保2(rakuten_sonpo2)
    rakutenSonpoSecond: null,
    // 保険種類（カナ）2
    insuranceTypeKanaSecond: null,
    // 保険の会社（カナ）2
    insuranceCompanyKanaSecond: null,
    // 保険の対象2(hoken_taisho2)
    insuranceTargetSecond: null,
    // 基本保険金額2(gaku_kihon_hoken2)
    basicInsuranceAmountSecond: null,
    // 地震保険金額2(gaku_jishin_hoken2)
    earthquakeInsuranceAmountSecond: null,
    // 満期日2(manki_date2)
    dueDateSecond: null,
    // 全戸数(all_kosu)
    allUnits: null,
    // 職作業分類(shokusagyo_bunrui)
    jobWorkType: null,
    // 激変緩和措置(gekihen_kanwa)
    severeAlleviationMasure: null,
    // 他契約保険金額
    otherContractAmount: null,
    // // 評価法区分(hyoka_kbn)
    // methodType: null,
    // その他評価法金額(other_kaku)
    otherMethodAmount: null,
    // その他評価法根拠(other_konkyo)
    otherMethodBasis: null,
    // 設備什器火災保険加入有無(setuj_kanyu)
    withEquipmentFireInsurance: null,
    // 設備什器保険金額(setuj_gaku)
    // equipmentAmount: null,
    // 募集人名(boshunin_name)
    recruitmentName: null,
    // 補正課所コード(hosei_kasho_cd)
    // correctionOfficeCode: null,
    // 補正割合(hosei_wariai)
    // correctionRatio: null,
    // 代理店分担清算区分(bnt_kbn)
    agentShareLiquidationType: null,
    // 主幹事課店コード(knj_katen_cd)
    // managerStoreCode: null,
    // 主幹事代理店コード(knj_dairi_cd)
    // managerAgentCode: null,
    // 主幹事自己特定(knj_jiko)
    // managerSelfSpecific: null,
    // 主幹事分担割合(knj_bnt_wari)
    // managerProportion: null,
    // 契約区分(keiyaku_kbn)
    // agreeType: null,
    // 法人コード・前(bef_hojin_cd)
    // corporateCodeBefore: null,
    // 法人コード・後(aft_hojin_cd)
    // corporateCodeAfter: null,
    // 代表者氏名(name_daihyo)
    // representativeName: null,
    // 代表者氏名カナ(name_daihyo_k)
    // representativeNameKana: null,

    // 試算画面追加
    // 支払区分
    // paymentType: this.paymentType,
    // 火災保険支払方法
    firePaymentMethod: null,
    // 地震保険支払方法
    earthquakePaymentMethod: null,
    // 制限コード
    restrictionCode: null,
    // 決定番号
    decisionNo: null,
    // 漏水による建物管理賠償責任補償対象外特約
    waterLeakBuildingManageCompensationOption: null,
    // 水濡れ原因調査費用補償特約有無
    waterStainedExpensesCompensationOption: null,
    // 雑危険補償対象外特約有無
    crudeDangerContractOption: null,
    // 風災等支払方法変更特約有無
    windPaymentMethodContractOption: null,
    // 水災支払方法変更特約有無
    waterPaymentMethodContractOption: null,
    // 水災危険補償対象外特約有無
    waterDangerContractOption: null,
    // 法人等契約の被保険者に関する特約有無
    orporateInsuredContractOption: null,
    // 火災等危険のみ補償特約有無
    fireDangerCompensationOption: null,
    newStartDateMin: null,               // 始期日エラーの場合の始期日Min
    // フリープランオプション選択中
    freeOptionSelected: false,
    buildingLoan: null,                                           // 住宅ローン有無(1:あり、2:なし)
    // 代理店分担入力画面
    // // 代理店分担積算区分
    // withAgentIntegrationType: 1,
    // // 割合・実額区分
    // proportionType: 1,
    // 課店コード（幹事）
    mainManagerStoreCode: null,
    // 代理店コード（幹事）
    mainManagerAgentCode: null,
    // 自己特定（幹事）
    mainManagerSelfSpecific: null,
    // 分担割合（幹事）
    mainManagerProportion: null,
    // 課店コード１（非幹事）
    noneManagerStoreCode1: null,
    // 代理店コード１（非幹事）
    noneManagerAgentCode1: null,
    // 自己特定１（非幹事）
    noneManagerSelfSpecific1: null,
    // 分担割合１（非幹事）
    noneManagerProportion1: null,
    // 課店コード２（非幹事）
    noneManagerStoreCode2: null,
    // 代理店コード２（非幹事）
    noneManagerAgentCode2: null,
    // 自己特定２（非幹事）
    noneManagerSelfSpecific2: null,
    // 分担割合２（非幹事）
    noneManagerProportion2: null,

    // 申込情報画面で追加
    // 契約種類
    agreeType: null,
    // 法人コード・前
    corporateCodeBefore: null,
    // 法人コード・後
    corporateCodeAfter: null,
    // 代表者氏名
    representativeName: null,
    // 代表者氏名（カナ）
    representativeNameKana: null,
    // 契約者メールアドレス(確認)
    contractorMailConfirm: null,
    // ご契約者と個人賠償の本人の同異
    // 個人賠償補償同異
    personalLiabilityIdentical: null,
    // ご契約者と借家人賠償の本人の同異
    // 借家賠償補償同異
    tenantLiabilityIdentical: null,
    // 補正課所コード
    correctionOfficeCode: null,
    // 補正割合
    correctionRatio: null,
    // 質権設定
    withPledge: null,
    // 住宅支援機構融資
    houseSupportFinancing: null,
    // 抵当権者特約
    withMortgageContract: null,
    // 自己特定
    selfSpecific: 9,
    // 代理店特記事項（カナ）
    agentNotesKana: null,
    // 領収ハガキ
    noneReceptPostcard: null,
    // 旧証券番号
    oldPolicyNo: null,
    // EDP代理店分担
    eDPAgentShare: null,
    // 証券郵送選択
    policyMailingSelection: null,
    // 旧証券番号枝番
    oldPolicyNoBranch: null,
    // 担当者コード
    agentManagerCode: null,
    // 営業課店名
    sectionName: null,

    // 口座情報入力画面で追加
    // 銀行区分
    bankType: null,
    // 金融機関コード
    financialInstitutionCode: null,
    // 店番号
    shopNo: null,
    // 科目
    subject: null,
    // 口座番号
    accountNo: null,
    // 口座名義人（カナ）
    accountHolderKana: null,
    accountHolderKana2: null,
    // 振替済通知
    transferredNotification: null,
    // 記号
    sign: null,
    // 番号
    number: null,
    // 口座名義人（カナ）
    accountHolderKanaYutyo: null,
    accountHolderKanaYutyo2: null,
    // 振替済通知
    transferredNotificationYutyo: null,
    // 口座名義人(漢字)
    accountHolderKanji: null,
    accountHolderKanjiYutyo: null,
    accountHolderKanji2: null,
    accountHolderKanjiYutyo2: null,
    // 依頼書取付省略
    requestFormInstallationOmission: null,
    // 初回口振
    firstAccountTransfer: null,
    // フリープラン火災等危険のみ補償特約有無
    freeWithFireOnlyCompensation: null,
    // おすすめプラン火災等危険のみ補償特約有無
    advanceWithFireOnlyCompensation: null,
    // 明記物件郵送フラグ
    sendFlagExplicitProperty: null,
    // 耐火性能郵送フラグ
    fireResistanceMailingFlag: null,
    // 地震保険郵送フラグ
    earthquakeDiscountMailingFlag: null,
    equipmentFee: null, // 設備什器保険料
    goodsFee: null, // 商品製品保険料
    specificationArticleFee: null, // 明記物件保険料
    // 建物管理賠責保険料
    buildingManageLiabilityFee: null,
    // 職作業 ADD BY KYOKU
    jobWork: null,
    // 明記物件明細有無
    withSpecificationArticleDetail: null
  }
}
