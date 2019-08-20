export const
  responses = [
    // リクエストエラー
    {
      params: {state: 'bad'},
      method: 'POST', // get|post|put|patch|delete
      url: '\\w+', // 正規表現で設定
      response: {
        status: 400,
        data: {
          result: [
            {
              param: 'test1',
              errorid: 'Exxxx1',
              discription: '1つ目のエラー'
            },
            {
              param: 'test2',
              errorid: 'Exxxxx2',
              discription: '2つ目のエラー'
            }
          ]
        }
      }
    },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'readNoticeList', // 正規表現で設定
      response: {
        status: 200,
        data: {
          result: {
            list: [{noticeContents: 'お知らせ１'}, {noticeContents: 'お知らせ２'}]
          }
        }
      }
    },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'fileupload', // 正規表現で設定
      response: {
        status: 200,
        data: {
          result: {
            list: [{noticeContents: 'お知らせ１'}, {noticeContents: 'お知らせ２'}]
          }
        }
      }
    },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'readEntryNoList', // 正規表現で設定
      response: {
        status: 200,
        data: {
          totalSize: 10,
          list: [
            {entryNo: 10001, contractorName: '損保太郎', addDate: '20180101'},
            {entryNo: 10002, contractorName: '損保二郎', addDate: '20180102'},
            {entryNo: 10003, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10004, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10005, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10006, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10007, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10008, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10009, contractorName: '損保三郎', addDate: '20180103'},
            {entryNo: 10010, contractorName: '損保三郎', addDate: '20180103'}
          ]
        }
      }
    },
    // 認証エラー
    {
      params: {state: 'unauthorized'},
      method: 'POST', // get|post|put|patch|delete
      url: '\\w+', // 正規表現で設定
      response: {
        status: 401,
        data: {
          result: [
            {
              param: 'test1',
              errorid: 'Exxxx1',
              discription: '1つ目のエラー'
            },
            {
              param: 'test2',
              errorid: 'Exxxxx2',
              discription: '2つ目のエラー'
            }
          ]
        }
      }
    },

    // システムエラー
    {
      params: {state: 'serverError'},
      method: 'POST', // get|post|put|patch|delete
      url: '\\w+', // 正規表現で設定
      response: {
        status: 500,
        data: {
          result: [
            {
              errorid: 'Exxxx1',
              discription: '1つ目のエラー'
            },
            {
              errorid: 'Exxxxx2',
              discription: '2つ目のエラー'
            }
          ]
        }
      }
    },

    // {
    //   method: 'GET', // get|post|put|patch|delete
    //   url: 'config', // 正規表現で設定
    //   response: {
    //     status: 200,
    //     data:
    //       { id: 1 }
    //   }
    // },

    {
      method: 'GET',
      url: '^/users2',
      // responseは関数でも設定可能
      response: () => {
        const isError = window.location.search === '?error=true'
        return {
          status: isError ? 400 : 200,
          data: [
            { id: 1, name: 'hoge' },
            { id: 2, name: 'fuga' }
          ]
        }
      }
    },
    // responseを指定せずthenを指定した場合、実際にリクエストして取得したレスポンスの改変が可能
    {
      method: 'GET',
      url: '^/users3',
      then: (status, data) => {
        data[0].name = 'hogehoge'
        return [status, data]
      }
    },

    // responseを指定せずthenを指定した場合、実際にリクエストして取得したレスポンスの改変が可能
    {
      method: 'POST',
      url: 'confirmData',
      response: {
        status: 200,
        // 申込一時保存データ
        data: {
          checkResult: 0,
          error: '',
          errorCode: ''
        }
      }
    },

    // NHA_O_0001_申込一時保存読込
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'readEntryTempSave', // 正規表現で設定
      response: {
        status: 200,
        // 申込一時保存データ
        data: {
          data: { // 申込一時保存データ
            screenID: 'Entryinfo', // 一時保存画面ID
            entryStatus: '1', // 申込ステータス
            // entryStatus: '4', // 申込ステータス
            entryType: '2', // 申込区分
            paymentType: '3', // 支払区分
            startDate: '20190101', // 保険始期日
            fireEndDate: '20211231', // 火災保険終期日
            earthquakeEndDate: '20211231', // 地震保険終期日
            buildingOwnership: '1', // 建物所有関係
            buildingFrom: '2', // 建物形態
            buildingFloor: 11, // 建物階数
            basementFloor: 3, // 地下階数
            residentialFloor: 8, // 居住階数
            buildingStructure: '6', // 建物構造
            steelBuildingType: '1', // 鉄骨造建物種類詳細
            otherBuildingType: '4', // その他建物種類詳細
            structureGrade: 'T', // 構造級別
            structureConfirmed: '1', // 構造確認済み
            buildingLocation: '58', // 建物所在地
            buildingBuildingDate: '198008', // 建物建築年月
            buildingArea: 234.99991, // 建物面積
            documentsConfirmed: '1', // 書類提出確認済み
            withBuildingFireInsurance: 1, // 建物火災保険加入有無
            withNewBuildingValueKnown: '2', // 新築時の建築価額通知有無
            policyCurrentReplacementValueMin: 800, // 訂正前協定再調達価額MIN
            policyCurrentReplacementValueMax: 1900, // 訂正前協定再調達価額MAX
            policyCurrentReplacementValue: 1490, // 協定再調達価額
            fenceValue: 100, // 門・塀・車庫価額
            newBuildingValue: 2700, // 新築時の建築価額
            apartmentClassification: '1', // マンション評価基準
            withHouseholdFireInsurance: '1', // 家財火災保険加入有無
            householderAge: 21, // 世帯主年令
            numberOfChildren: 3, // 子供人数
            withSpouse: '2', // 配偶者有無
            housemates: 1, // 同居人人数
            buildingAppraisedLower: 930, // 建物評価額（下限）
            buildingAppraisedUpper: 1940, // 建物評価額（上限）
            householdAppraisedLower: 270, // 家財評価額（下限）
            householdAppraisedUpper: 1340, // 家財評価額（上限）
            withBuildingEarthquakeInsurance: '1', // 建物地震保険加入有無
            withHouseholdEarthquakeInsurance: '1', // 家財地震保険加入有無
            confirmEarthquakeDiscount: '4', // 地震保険割引確認
            earthquakeInsuranceDiscountPercent: 11, // 地震保険割引率
            seismicGradeDiscountGrade: null, // 耐震等級割引等級
            seismicDiagnosisDate: '20180101', // 耐震診断年月日
            buildingDateConfirmed: '1', // 建築年月確認済み
            discountCertificateConfirmed: '1', // 割引証明書類注意事項確認済み
            includFoundationWork: '1', // 基礎工事含む
            includJoinery: 1, // 畳・建具等含む
            includFence: 2, // 門・塀・垣含む
            includGarage: 1, // 物置車庫等含む
            includShared: 2, // 共用部分含む
            fireTerm: 6, // 火災保険期間
            earthquakeTerm: 3, // 地震保険期間
            earthquakeAutomaticContinuation: '1', // 地震自動継続
            selectPlan: 2, // 選択プラン
            advanceWithFireCompensation: '1', // おすすめプラン火災・落雷・破裂・爆発補償有無
            advanceWithWindCompensation: '1', // おすすめプラン風災・ひょう災・雪災補償有無
            advanceWindCopayment: 200, // おすすめプラン風災・ひょう災・雪災自己負担額
            advanceWithWaterCompensation: '2', // おすすめプラン水災補償有無
            advanceWithWaterStainedCompensation: '2', // おすすめプラン水濡れ・盗難補償有無
            advanceWithCorruptionCompensation: '1', // おすすめプラン破損・汚損等補償有無
            advanceCorruptionCopayment: 30, // おすすめプラン破損・汚損等自己負担額
            advanceCorruptionHouseholdLimited: 50, // おすすめプラン破損・汚損等家財支払限度額
            advanceWithDisasterExpensesCompensation: '1', // おすすめプラン災害時諸費用補償有無
            advanceDisasterExpensesLimited: 5, // おすすめプラン災害時諸費用支払限度額
            advanceWithEarthquakeCompensationBuilding: '1', // おすすめプラン地震・噴火・津波補償有無（建物）
            advanceWithEarthquakeCompensationHousehold: '2', // おすすめプラン地震・噴火・津波補償有無（家財）
            advanceWithExpenseCompensation: '2', // おすすめプラン費用保険金補償有無
            advanceWithPersonalLiability: '1', // おすすめプラン個人賠償責任補償特約有無
            advanceWithTenantLiability: '2', // おすすめプラン借家人賠償責任補償特約有無
            advanceTenantLiabilityLimited: 1230, // おすすめプラン借家人賠償責任補償特約支払限度額
            advanceWithBuildingManageLiability: '1', // おすすめプラン建物管理賠償責任補償特約有無
            advanceBuildingManageLiabilityLimited: 100, // おすすめプラン建物管理賠償責任補償特約支払限度額
            advanceWithExposureCompensation: '2', // おすすめプラン類焼損害補償特約有無
            advanceWithRebuildingCostCompensation: '1', // おすすめプラン建替費用補償特約有無
            advanceWithCommonRepairCostCompensation: '2', // おすすめプラン共用部分修理費用補償特約有無
            advanceWithCrimeCostCompensation: '2', // おすすめプラン防犯対策費用補償特約有無
            advanceWithCorbelHouseholdCompensation: '1', // おすすめプラン持ち出し家財補償特約有無
            advanceWithMovingCompensation: '1', // おすすめプラン引越し中の損害補償特約有無
            freeWithFireCompensation: 'E', // フリープラン火災・落雷・破裂・爆発補償有無
            freeWithWindCompensation: 'F', // フリープラン風災・ひょう災・雪災補償有無
            freeWindCopayment: 30, // フリープラン風災・ひょう災・雪災自己負担額
            freeWithWaterCompensation: 'H', // フリープラン水災補償有無
            freeWithWaterStainedCompensation: 'I', // フリープラン水濡れ・盗難補償有無
            freeWithCorruptionCompensation: 'J', // フリープラン破損・汚損等補償有無
            freeCorruptionCopayment: 10, // フリープラン破損・汚損等自己負担額
            freeCorruptionHouseholdLimited: 300, // フリープラン破損・汚損等家財支払限度額
            freeWithEarthquakeCompensationBuilding: '1', // フリープラン地震・噴火・津波補償有無（建物）
            freeWithEarthquakeCompensationHousehold: '2', // フリープラン地震・噴火・津波補償有無（家財）
            freeWithDisasterExpensesCompensation: '2', // フリープラン災害時諸費用補償有無
            freeDisasterExpensesLimited: null, // フリープラン災害時諸費用支払限度額
            freeWithExpenseCompensation: '1', // フリープラン費用保険金補償有無
            freeWithPersonalLiability: '1', // フリープラン個人賠償責任補償特約有無
            freeWithTenantLiability: '1', // フリープラン借家人賠償責任補償特約有無
            freeTenantLiabilityLimited: 100000001, // フリープラン借家人賠償責任補償特約支払限度額
            freeWithBuildingManageLiability: '1', // フリープラン建物管理賠償責任補償特約有無
            freeBuildingManageLiabilityLimited: 100000001, // フリープラン建物管理賠償責任補償特約支払限度額
            freeWithExposureCompensation: '1', // フリープラン類焼損害補償特約有無
            freeWithRebuildingCostCompensation: '1', // フリープラン建替費用補償特約有無
            freeWithCommonRepairCostCompensation: '2', // フリープラン共用部分修理費用補償特約有無
            freeWithCrimeCostCompensation: '2', // フリープラン防犯対策費用補償特約有無
            freeWithCorbelHouseholdCompensation: '2', // フリープラン持ち出し家財補償特約有無
            freeWithMovingCompensation: '1', // フリープラン引越し中の損害補償特約有無
            fireBuildingAmount: 1550, // 火災保険建物保険金額
            fireHouseholdAmount: 610, // 火災保険家財保険金額
            earthquakeBuildingAmount: 770, // 地震保険建物保険金額
            earthquakeBuildingAmountLower: 300, // 建物の地震保険保険金額（下限）
            earthquakeBuildingAmountUpper: 700, // 建物の地震保険保険金額（上限）
            earthquakeHouseholdAmount: 190, // 地震保険家財保険金額
            earthquakeHouseholdAmountLower: 200, // 家財の地震保険保険金額（下限）
            earthquakeHouseholdAmountUpper: 550, // 家財の地震保険保険金額（上限）
            advanceFireBuildingFee: 100000001, // おすすめプラン火災保険建物保険料
            advanceFireHouseholdFee: 100000001, // おすすめプラン火災保険家財保険料
            advanceFireFee: 100000001, // おすすめプラン火災保険料
            advanceEarthquakeBuildingFee: 100000001, // おすすめプラン地震保険建物保険料
            advanceEarthquakeHouseholdFee: 100000001, // おすすめプラン地震保険家財保険料
            advanceEarthquakeFee: 100000001, // おすすめプラン地震保険料
            advanceTotalFee: 100000001, // おすすめプラン合計保険料
            freeFireBuildingFee: 100000001, // フリープラン火災保険建物保険料
            freeFireHouseholdFee: 100000001, // フリープラン火災保険家財保険料
            freeFireFee: 100000001, // フリープラン火災保険料
            freeEarthquakeBuildingFee: 100000001, // フリープラン地震保険建物保険料
            freeEarthquakeHouseholdFee: 100000001, // フリープラン地震保険家財保険料
            freeEarthquakeFee: 100000001, // フリープラン地震保険料
            freeTotalFee: 100000001, // フリープラン合計保険料
            objectAddressSame: '2', // 保険対象住所同異
            objectYubin: '5515678', // 保険対象郵便番号
            objectAddressCode: '10', // 住所コード
            objectAddress: '大阪府大阪市☆☆区◇◇２ ', // 保険対象住所
            objectAddressKana: 'オオサカフオオサカシ☆☆ク◇◇ ２', // 保険対象住所カナ
            objectAddressFree: '－２２', // 保険対象住所
            objectAddressKanaFree: '－２２', // 保険対象住所カナ
            contractorName: '楽天太郎', // 契約者氏名
            contractorNameKana: 'ﾗｸﾃﾝﾀﾛｳ', // 契約者氏名カナ
            contractorPost: '1300013', // 契約者郵便番号
            contractorAddressCode: '0', // 住所コード
            contractorAddress: '北海道〇〇市××町１丁目', // 契約者住所
            contractorAddressKana: 'ホッカイドウ〇〇シ××マチ１チョウメ', // 契約者住所カナ
            contractorAddressFree: '１１番１１１号', // 契約者住所
            contractorAddressKanaFree: '１１バン１１１ゴウ', // 契約者住所カナ
            contractorTelArea: '06', // 契約者電話番号ー市外
            contractorTelCity: '610', // 契約者電話番号ー市内
            contractorTelNo: '555', // 契約者電話番号ー加入番号
            contractorTel2Area: '0120', // 契約者電話番号2ー市外
            contractorTel2City: '610', // 契約者電話番号2ー市内
            contractorTel2No: '555', // 契約者電話番号2ー加入番号
            contractorMail: 'rakuren.man@rakuten.com', // 契約者メールアドレス
            contractorSex: '1', // 契約者性別
            contractorBirthday: '19880901', // 契約者生年月日
            contractorIdentical: '2', // 被保険者同異
            insuredName: '楽天太郎', // 被保険者氏名
            insuredNameKaNa: 'ﾗｸﾃﾝﾀﾛｳ', // 被保険者氏名カナ
            personalLiabilityName: '楽天次郎', // 個人賠償補償対象者氏名
            personalLiabilityNameKana: 'ﾗｸﾃﾝｼﾞﾛｳ', // 個人賠償補償対象者氏名カナ
            tenantCompensationName: '楽天三郎', // 借家賠償補償対象者氏名
            tenantCompensationNameKana: 'ﾗｸﾃﾝｻﾝﾛｳ', // 借家賠償補償対象者氏名カナ
            confirmContractor: '1', // 契約者・被保険者・保険対象所在地確認
            confirmBuilding: '1', // 保険の対象となる建物情報確認
            confirmWithOtherAgree: '1', // 他の保険契約等の有無確認
            confirmTermPaymentMethod: '1', // 保険期間・保険料払込方法確認
            confirmWithEarthquakeDiscount: '1', // 地震保険加入有無・割引等確認
            confirmCompensation: '1', // 補償内容確認
            confirmDisclosureStatement: '1', // 重要事項説明書確認
            confirmPrivacyProtection: '1', // 個人情報取扱同意
            confirmEarthquake: '1', // 地震保険確認
            confirmAccountTransfer: '1', // 口座情報確認
            confirmAgent: '1', // 代理店情報確認
            confirmRecruitment: '1', // 募集人情報確認
            confirmOtherInfo: '1', // その他確認
            documentsConfirmMethod: '2', // 確認書類提出方法
            contactField: 'O000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001', // 訂正内容ご連絡欄
            reviewRequestDate: '20180101', // 審査依頼日
            confirmReviewedContractor: '1', // 審査後契約者・被保険者・保険対象所在地確認
            confirmReviewedBuilding: '1', // 審査後保険の対象となる建物情報確認
            confirmWithReviewedOtherAgree: '1', // 審査後他の保険契約等の有無確認
            confirmReviewedTermPaymentMethod: '1', // 審査後保険期間・保険料払込方法確認
            confirmWithReviewedEarthquakeDiscount: '1', // 審査後地震保険加入有無・割引等確認
            confirmReviewedCompensation: '1', // 審査後補償内容確認
            confirmReviewedDisclosureStatement: '1', // 審査後重要事項説明書確認
            confirmReviewedPrivacyProtection: '1', // 審査後個人情報取扱同意
            confirmReviewedEarthquake: '1', // 審査後地震保険確認
            agentCode: '70056', // 代理店コード
            // agentName: '代理店名70056', // 代理店名
            withOldContract: '1', // 旧保険契約有無
            rakutenSonpoFirst: '1', // 保険会社選択
            insuranceTypeKanaFirst: 'カイシャ１', // 保険会社（カナ）
            insuranceCompanyKanaFirst: 'シュルイ１', // 保険の種類（カナ）
            insuranceTargetFirst: '1', // 保険の対象
            basicInsuranceAmountFirst: '1000', // 基本保険金額
            earthquakeInsuranceAmountFirst: '2000', // 地震保険金額
            dueDateFirst: '20190101', // 満期日
            rakutenSonpoSecond: '2', // 保険会社選択
            insuranceTypeKanaSecond: 'カイシャ２', // 保険会社（カナ）
            insuranceCompanyKanaSecond: 'シュルイ２', // 保険の種類（カナ）
            insuranceTargetSecond: '3', // 保険の対象
            basicInsuranceAmountSecond: '3000', // 基本保険金額
            earthquakeInsuranceAmountSecond: '4000', // 地震保険金額
            dueDateSecond: '20190101', // 満期日
            withOtherContract: '1', // 他保険契約有無

            // 内容確認追加で使用された
            buildingUsage: '03',
            withSpecificationArticleFireInsurance: 1,
            specificationArticleAmount: 5000,
            specificationArticleFee: 1001,
            withEquipmentFireInsurance: 1,
            equipmentAmount: 120000,
            equipmentFee: 1002,
            withGoodsFireInsurance: 1,
            goodsAmount: 13000,
            goodsFee: 1003,

            // buildingInsuranceAmount: 1200,
            otherMethodBasis: 'カタカナ',
            withHousingloan: 1,

            // 申込情報画面で使用された
            // おすすめプラン法人等契約に関する特約有無
            advanceWithCorporationAgreement: 1,
            // フリープラン法人等契約に関する特約有無
            freeWithCorporationAgreement: 1,

            // 申込情報画面で追加
            // 契約種類
            agreeType: 2,
            // 法人コード・前
            corporateCodeBefore: '01',
            // 法人コード・後
            corporateCodeAfter: '02',
            // 代表者氏名
            representativeName: '代表者氏名',
            // 代表者氏名（カナ）
            representativeNameKana: 'カナ',
            // 契約者メールアドレス(確認)
            contractorMailConfirm: 'rakuren.man@rakuten.com',
            // ご契約者と個人賠償の本人の同異
            // 個人賠償補償同異
            personalLiabilityIdentical: 2,
            // ご契約者と借家人賠償の本人の同異
            // 借家賠償補償同異
            tenantLiabilityIdentical: 2,
            // 補正課所コード
            correctionOfficeCode: 'A234',
            // 補正割合
            correctionRatio: 'B23',
            // 質権設定
            withPledge: null,
            // 住宅支援機構融資
            houseSupportFinancing: 1,
            // 抵当権者特約
            withMortgageContract: 1,
            // 自己特定
            selfSpecific: 1,
            // 代理店特記事項（カナ）
            agentNotesKana: 'カナ',
            // 領収ハガキ
            noneReceptPostcard: 1,
            // 旧証券番号
            oldPolicyNo: 'AAB000',
            // EDP代理店分担
            eDPAgentShare: 1,
            // 証券郵送選択
            policyMailingSelection: 1,
            // 2次開発追加開始
            salesCode: '1001', // 満期日
            agentName: '幹事代理店名一', // 代理店名
            noneManagerStoreCode1: '7005', // 非幹事課店コード1
            noneManagerAgentCode1: '70051', // 非幹事代理店コード1
            noneManagerSelfSpecific1: '2', // 非幹事自己特定1
            noneManagerProportion1: 50, // 非幹事分担割合１
            noneManagerStoreCode2: '7006', // 非幹事課店コード２
            noneManagerAgentCode2: '70062', // 非幹事代理店コード２
            noneManagerSelfSpecific2: '9', // 非幹事自己特定２
            noneManagerProportion2: 30, // 非幹事分担割合２
            // G-NHA-010_内容確認
            // 募集人名
            recruitmentID: 9000001,
            // 募集人名
            recruitmentName: '楽天　太郎',
            // 2次開発終了
            jyulonRiyo: '1'
          },
          fileList: [
            {
              fileId: 0,
              fileType: 3,
              docType: '04',
              withInsurancePolicyDiscountDescription: 2,
              thumbnail: null
            },
            {
              fileId: 1,
              fileType: 3,
              docType: '09',
              withInsurancePolicyDiscountDescription: 2,
              thumbnail: null
            },
            {
              fileId: 2,
              fileType: 1,
              docType: '09',
              withInsurancePolicyDiscountDescription: 2,
              thumbnail: null
            }
          ],
          dataBeforeCorrection: { // 申込一時保存訂正前データ
            startDate: 20180301, // 訂正前保険始期日
            buildingFloor: 111, // 訂正前建物階数
            basementFloor: 3, // 訂正前地下階数
            residentialFloor: 101, // 訂正前居住階数 一戸建ての場合不要
            buildingLocation: '61', // 訂正前所在地
            buildingBuildingDate: 198008, // 訂正前建物建築年月
            buildingArea: 234.456, // 訂正前建物面積
            buildingStructure: '6', // 訂正前建物構造
            steelBuildingType: '2', // 訂正前鉄骨造建物種類詳細
            otherBuildingType: '4', // 訂正前その他建物種類詳細
            structureGrade: 'M', // 訂正前建物構造級別
            seismicDiagnosisDate: '20170101', // 訂正前耐震診断年月日
            policyCurrentReplacementValueMin: 780, // 訂正前協定再調達価額MIN
            policyCurrentReplacementValueMax: 1800, // 訂正前協定再調達価額MAX
            policyCurrentReplacementValue: 1600, // 訂正前協定再調達価額 (概観法による評価額)
            newBuildingValue: 1500, // 評価額（取得年次法の場合:新築時の建築価額）
            householdAppraisedLower: 350, // 家財評価額MIN
            householdAppraisedUpper: 900, // 家財評価額MAX
            confirmEarthquakeDiscount: '3', //  ＊今APIにない訂正前地震保険割引確認1:書類提出できない（建築年割引無）、2:免震建築物割引、3:耐震等級割引、4:耐震診断割引、5:書類提出できない（建築年割引有）
            seismicGradeDiscountGrade: 2, // 訂正前耐震等級割引等級1:等級1、2:等級2、3:等級3
            earthquakeInsuranceDiscountPercent: 33, // 訂正前地震保険割引率
            fireBuildingFee: 200000002, // 訂正前火災保険建物保険料
            fireHouseholdFee: 200000002, // 訂正前火災保険家財保険料
            earthquakeBuildingFee: 200000002, // 訂正前地震保険建物保険料
            earthquakeHouseholdFee: 200000002, // 訂正前地震保険家財保険料
            totalFee: 555555555, // 訂正前合計保険料

            buildingOwnership: 1 // 所有関係
          },
          alertInfo: [ // アラート情報結果
            {
              parametersName: ' ', // パラメータ名
              alertCode: ' ', // アラートコード
              messageDesc: ' ' // メッセージ詳細
            }
          ]
        }
      }
    },

    // NHA_O_0002_試算
    {
      method: 'POST', //  get|post|put|patch|delete
      url: 'estimate/ha', //  正規表現で設定
      response: {
        status: 200,
        data: {
          fireBuildingFee: 28000, // 火災保険建物保険料
          fireHouseholdFee: 5588, // 火災保険家財保険料
          fireFee: 32588, // 火災保険料
          equipmentFee: 1153, // 設備什器保険料
          goodsFee: 1215, // 商品製品保険料
          specificationArticleFee: 2123, // 明記物件保険料
          earthquakeBuildingFee: 12880, // 地震保険建物保険料
          earthquakeHouseholdFee: 4500, // 地震保険家財保険料
          earthquakeFee: 17320, // 地震保険料
          personalLiabilityFee: 1221, // 個人賠責保険料
          tenantLiabilityFee: 1001, // TenantLiabilityFee
          exposureFee: 678, // 類焼保険料
          totalFee: 49968, // 合計保険料
          annualFee: 15000, // 年額保険料
          annualPaymentFirstInsuranceFee: 1200, // 初回保険料
          debugInfoInput: 'inputXml',
          debugInfoOutput: 'outputXml'
        }
      }
    },

    // NHA_O_0003_見積書作成 TODO サーバ側APIに合わせて修正する必要あり
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'estimationCreate', // 正規表現で設定
      response: {
        status: 200,
        data: {
          reportContents: { // レポート内容
            entryDate: '2020/1/1', // 作成日
            number: 'Ax0001', // 申込依頼No
            agencyName: 'ららぽーと', // 代理店名称
            agencyCd: 'A000000001', // 代理店コード
            fireAmountT: '100万円', // 火災保険建物保険金額
            fireAmountK: '100万円', // 火災保険家財保険金額
            facilitiesAmount: '-', // 設備什器保険金額
            productAmount: '-', // 商品製品保険金額
            statedAmount: '-', // 明記物件保険金額
            quakeAmountT: '100万円', // 地震保険建物保険金額
            quakeAmountK: '100万円', // 地震保険家財保険金額
            fireShiki: '2017年01月01日', // 火災保険始期日
            fireManki: '2018年01月01日', // 火災保険終期日
            fireInsurancePeriod: '100年間', // 火災保険期間
            jisinShiki: '2018年01月01日', // 地震保険始期日
            jisinManki: '2018年01月01日', // 地震保険終期日
            quakeInsurancePeriod: '100年間(自動継続)', // 地震保険期間
            location: '大阪府', // 保険対象所在地
            jobWork: '専用住宅', // 用法・職作業
            own: '個人', // 所有関係
            type: 'なし', // 建物種類・性能
            grade: 'T', // 構造級別
            area: '1000m2', // 面積
            builtYear: '2010年01月 ', // 建築年月
            discount: 'なし', // 割増引
            fire: '1', // 火災、落雷、破裂または爆発補償有無
            wind: '2', // 風災・雹災・雪災補償有無
            windAmount: '(自己負担額)50万円', // 風災・雹災・雪災自己負担額
            water: '1', // 水災補償有無
            wet: '2', // 水濡れ・盗難等補償有無
            damage: '1', // 破損・汚損補償有無
            damageAmount: '(自己負担額)50万円', // 破損・汚損等自己負担額
            damageLimit: '(家財支払限度額)20万円', // 破損・汚損等家財支払限度額
            disaster: '2', // 災害時諸費用_有無
            disastersLimit: '(支払限度額)10万円', // 災害時諸費用_支払限度額
            quake: '2', // 地震火災費用_有無
            pipe: '1', // 水道管修理費用_有無
            temp: '2', // 緊急時仮住い費用_有無
            lock: '1', // 錠前交換費用_有無
            special: '2', // 特別費用_有無
            prevent: '1', // 損害防止費用_有無
            eruption: '2', // 地震・噴火・津波_有無
            personal: '1', // 個人賠償責任補償_有無
            personalLimit: '50', // 個人賠償責任補償_支払限度額
            tenant: '2', // 借家人賠償責任補償_有無
            tenantLimit: '40', // 借家人賠償責任補償_支払限度額
            building: '1', // 建物管理賠償責任補償_有無
            buildingLimit: '', // 建物管理賠償責任補償_支払限度額
            ruisyou: '1', // 類焼損害補償_有無
            ruisyouLimit: '(支払限度額)1億円', // 類焼損害補償_支払限度額
            other: '建替費用補償特約、共用部分修理費用補償特約　他、防犯対策費用補償特約', // その他特約
            payment: '長期一括払', // 払込方法
            collect: 'クレジットカード払', // 集金方法
            recFireAmount: '100万円', // 火災保険料
            recQuakeAmount: '100万円', // 地震保険料
            recTotalAmount: '100万円', // 合計保険料
            recYearsAmount: '地震保険の自動継続分のお支払方法は、クレジットカード払となります。', // 年間保険料
            memo: 'メモです' // メモ
          },
          messageCode: 'メッセージA', // メッセージコード
          messageDesc: '' // メッセージ詳細
        }
      }
    },

    // 2-1 /api/TopMenuCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'topMenuCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-2 /api/BuiInfCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'buiInfCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-3 /api/insAmoCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'insAmoCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-4 /api/EarInsCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'earInsCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-5 /api/TriCalCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'triCalCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-6 /api/TemSavCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'temSavCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-7 /api/AppReqCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'appReqCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-8 /api/AppInfCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'appInfCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-9 /api/ConConCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'conConCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-10 /api/ReqExaCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'reqExaCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // 2-11 /api/ConConAftCheck
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'conConAftCheck', // 正規表現で設定
      response: {
        status: 200
      }
    },
    // NHA_O_0007_保険料確認
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'confirmFee', // 正規表現で設定
      response: {
        status: 200,
        data:
        {
          processingID: ' ', // 処理ID
          entryNo: ' ' // 申込依頼No
        }
      }
    },

    // NHA_O_0008_申込依頼
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entryRequest', // 正規表現で設定
      response: {
        status: 200,
        data:
        {
          entryNo: '999', // 申込依頼No
          policy: '12345678', // 一時保存画面ID
          screenID: 'Earthquake', // 一時保存画面ID
          entryType: 'F', // 申込区分
          productType: 'a', // 商品区分
          creditCard: '1111111111111111', // クレカ入力項目
          clientName: 'abc', // 顧客名
          token: 'xyz' // トークン（シングルユース方式）
        }
      }
    },

    // NHA_O_0009_申込登録（正常）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'registration', // 正規表現で設定
      response: {
        status: 200
      }
    },

    // NHA_O_0010_ファイルアップロード
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'fileUpload', // 正規表現で設定
      response: () => {
        return {
          status: 200,
          data: {
            fileNo: Math.floor((Math.random() * 9000) + 1000),
            thumbnail: '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'
          }
        }
      }
    },

    // NHA_O_0010_ファイル削除
    {
      method: 'DELETE', // get|post|put|patch|delete
      url: 'fileUpload', // 正規表現で設定
      response: {
        status: 200,
        data: {
        }
      }
    },

    // NHA_O_0012_審査依頼
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'reviewRequest', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: ' ', // 申込依頼No
          reviewRequestAfterID: ' ' // 審査依頼完了画面ID
        }
      }
    },

    // NHA_O_0013_申込依頼№再通知処理
    {
      method: 'POST', // get|post|put|patch|delete
      // パス要修正
      url: 'reviewRequest', // 正規表現で設定
      response: {
        status: 200,
        data: {
        }
      }
    },

    // NHA_O_0014_採番
    {
      method: 'GET', // get|post|put|patch|delete
      url: 'numbering', // 正規表現で設定
      response: {
        status: 200,
        data: {
          sequenceType: ' ', // シーケンス区分
          newNo: ' ' // 最新№
        }
      }
    },

    // NHA_O_0015_Config
    {
      method: 'GET', // get|post|put|patch|delete
      url: 'config', // 正規表現で設定
      response: {
        status: 200,
        data: {
          systemDate: (new Date()).getFullYear().toString() + ('00' + ((new Date()).getMonth() + 1).toString()).slice(-2) + ('00' + (new Date()).getDay().toString()).slice(-2), // システム日付
          startDateMin: '20190101', // 保険始期日最小値
          startDateMax: '20210101', // 保険始期日最大値
          agentCode: '70056', // 代理店コード
          agentName: 'だいりてんめい', // 代理店名
          agentList: [
            '70050',
            '70051',
            '70052',
            '70053',
            '70054',
            '70055',
            '70056'
          ]
        }
      }
    },

    // NHA_O_0016_申込一時保存データ(建物情報画面)(正常)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveBuilding/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0017_申込一時保存保険金額（正常）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveInsAmount/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    //  NHA_O_0018_申込一時保存地震（正常）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEarthquake/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    //  NHA_O_0019_申込一時保存試算（正常）(一時保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEstimate', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    //  NHA_O_0019_申込一時保存試算（正常）(自動保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEstimate/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    //  NHA_O_0020_申込一時保存申込情報（正常）(一時保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEntryInfo', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    //  NHA_O_0020_申込一時保存申込情報（正常）(自動保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEntryInfoAuto/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0021_申込一時保存内容確認(支払方法一時保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveMoneyCollection', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0021_申込一時保存内容確認(支払方法自動保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveMoneyCollection/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0021_申込一時保存内容確認(内容確認一時保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEntryCheck', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0021_申込一時保存内容確認(内容確認自動保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEntryCheck/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0022_申込一時保存審査依頼(一時保存)
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveReviewRequest', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0022_申込一時保存審査依頼（自動保存）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveReviewRequest/auto', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0023_申込一時保存内容確認審査後（一時保存）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveCheckAfter', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },

    // NHA_O_0023_申込一時保存内容確認審査後（自動保存）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveCheckAfter', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },
    // NHA_O_0024_申込一時保存申込依頼
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveEntryRequest', // 正規表現で設定
      response: {
        status: 200,
        data: {
          entryNo: 'AAA001' // 申込依頼No
        }
      }
    },
    // NHA_O_0025_評価額計算
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'evaluation/ha', // 正規表現で設定
      response: {
        status: 200,
        data: {
          buildingOnlyAppraisalValueUpper: 50000, // 建物のみ評価額上限
          buildingOnlyAppraisalValueLower: 10000, // 建物のみ評価額下限
          buildingAppraisedCalculationResults: 20000, // 建物評価額算出結果
          householdInsuranceAmountUpper: 7000, // 家財保険金額上限
          householdInsuranceAmountLower: 3000 // 家財保険金額下限
        }
      }
    },
    // NHA_O_0025_評価額計算（地震保険）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'evaluation-qua/ha', // 正規表現で設定
      response: {
        status: 200,
        data: {
          earthquakeBuildingAmountLower: 3000, // 建物の地震保険保険金額（下限）
          earthquakeBuildingAmountUpper: 6000, // 建物の地震保険保険金額（上限）
          earthquakeHouseholdAmountLower: 2000, // 家財の地震保険保険金額（下限）
          earthquakeHouseholdAmountUpper: 5000 // 家財の地震保険保険金額（上限）
        }
      }
    },
    // NHA_O_0026_住所検索
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'addSearch', // 正規表現で設定
      response: {
        status: 200,
        data: {
          list: [
            {
              addressCode: '0', // 住所コード
              kanJiPrefectureName: '都道府県', // 漢字都道府県名
              kanJiCityCountyName: ' 市区郡', // 漢字市区郡名
              kanJiMunicipalityName: ' 町村・字・通称', // 漢字町村・字・通称名
              kaNaPrefectureName: ' カナ都道府県', // カナ都道府県名
              kaNaCityCountyName: ' カナ市区郡', // カナ市区郡名
              kaNaMunicipalityName: ' カナ町村・字・通称' // カナ町村・字・通称名
            },
            {
              addressCode: '10', // 住所コード
              kanJiPrefectureName: '大阪府', // 漢字都道府県名
              kanJiCityCountyName: ' 大阪市', // 漢字市区郡名
              kanJiMunicipalityName: ' ●●', // 漢字町村・字・通称名
              kaNaPrefectureName: ' オオサカフ', // カナ都道府県名
              kaNaCityCountyName: ' オオサカシ', // カナ市区郡名
              kaNaMunicipalityName: ' 〇〇' // カナ町村・字・通称名
            }
          ]
        }
      }
    },
    // NHA_O_0029_代理店特約取得
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'readTokuList', // 正規表現で設定
      response: {
        status: 200,
        data: {
          list: [
            {
              category: '0', // カテゴリ
              contractSerial: '1', // 特約連番
              contractName: ' 建替費用補償特約' // 特約名称
            },
            {
              category: '1', // 住所コード
              contractSerial: '2', // 特約連番
              contractName: ' 共用部分修理費用補償特約' // 特約名称
            }
          ]
        }
      }
    },
    // NHA_O_0032_明記物件明細入力
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'retrieveMeikiArticle', // 正規表現で設定
      response: {
        status: 200,
        data: [
          {
            serial: '100001', // 連番
            insuranceType: '1', // 保険の対象区分
            explicitPropertyType: '1', // 明記物件区分
            explicitPropertyName: '明記物件の品名１', // 明記物件の品名
            amount: '500', // 保険金額
            notices: '特記事項１', // 特記事項
            entryNo: '999'
          }
        ]
      }
    },
    // {
    //   // params: {entryNo: null},
    //   method: 'POST', // get|post|put|patch|delete
    //   url: 'retrieveMeikiArticle', // 正規表現で設定
    //   response: {
    //     status: 500,
    //     data: {
    //       result: [
    //         {
    //           errorid: 'Exxxxx',
    //           discription: 'エラー'
    //         }
    //       ]
    //     }
    //   }
    // },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveMeikiArticle', // 正規表現で設定
      response: {
        status: 200,
        data:
        {
          result: [
            {
              errorid: 'Exxxxx',
              discription: 'エラー'
            }
          ]
        }
      }
    },
    // NHA_O_0033_申込依頼画面（口振）
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveKoufuri', // 正規表現で設定
      response: {
        status: 200,
        data:
          {
            policy: '1922' // 証券番号
          }
      }
    },
    // NHA_O_0036_申込一時保存他契約情報
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'otherContractInfo', // 正規表現で設定
      response: {
        status: 200,
        data:
          {
            entryNo: '999',
            confirmTermClearFlag: '0'
          //   result: [
          //     {
          //       errorid: 'Exxxxx',
          //       discription: 'エラー'
          //     }
          //   ]
          }
      }
    },
    // NHA_O_0038_代理店を絞る
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'lrisDariCdList', // 正規表現で設定
      params: {storeCode: '7005'},
      response: {
        status: 200,
        data: {
          list: [
            {agentCode: '70050', agentName: '70050名'},
            {agentCode: '70051', agentName: '70051名'},
            {agentCode: '70052', agentName: '70052名'},
            {agentCode: '70053', agentName: '70053名'},
            {agentCode: '70054', agentName: '70054名'},
            {agentCode: '70055', agentName: '70055名'},
            {agentCode: '70056', agentName: '70056名'}
          ]
        }
      }
    },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'lrisDariCdList', // 正規表現で設定
      params: {storeCode: '7006'},
      response: {
        status: 200,
        data: {
          list: [
            {agentCode: '70060', agentName: '70060名'},
            {agentCode: '70061', agentName: '70061名'},
            {agentCode: '70062', agentName: '70062名'}
          ]
        }
      }
    },
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveDaribnt', // 正規表現で設定
      response: {
        status: 200,
        data: {
          list: [
          ]
        }
      }
    },

    // NHA_O_0042_申込一時保存口座情報
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveTop/auto', // 正規表現で設定
      response: {
        status: 200,
        data:
          {
            policy: '1922', // 証券番号
            entryNo: '999'
          }
      }
    },
    // NHA_O_0042_申込一時保存口座情報
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'entrySaveTop', // 正規表現で設定
      response: {
        status: 200,
        data:
          {
            policy: '1922', // 証券番号
            entryNo: '998'
          }
      }
    },
    // TOP 見積連番検索
    {
      // params: {agentCode: '70005'},
      method: 'POST', // get|post|put|patch|delete
      url: 'printSearch', // 正規表現で設定
      response: {
        status: 200,
        data: {
          totalSize: 32,
          list: [
            {printNo: 9000001, contractorName: '楽天　太郎', addDate: '20181111'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000002, contractorName: '楽天　二郎', addDate: '20181112'},
            {printNo: 9000003, contractorName: '楽天　三郎', addDate: '20181113'}
          ]
        }
      }
    },
    // NHA_O_0031_募集人ID検索
    {
      // params: {RecruitmentName: '1111'},
      method: 'POST', // get|post|put|patch|delete
      url: 'readBosyuninName', // 正規表現で設定
      response: {
        status: 200,
        data: {
          checkResult: 2,
          errorMessage: '募集人ID検索のエラー',
          list: [
            {recruitmentID: 9000002, recruitmentName: '楽天　二郎', recruitmentNameKana: 'カナ'},
            {recruitmentID: 9000003, recruitmentName: '楽天　三郎', recruitmentNameKana: 'カナ'}
          ]
        }
      }
    },
    // 2-1 /api/acceptLimitCheck_引受制限
    {
      // params: {'rules':['#7','#8'],'screenId': 'NHA-002'}
      method: 'POST', // get|post|put|patch|delete
      url: 'acceptLimitCheck-2', // 正規表現で設定
      response: {
        status: 200,
        data: {
          list: [
            {
              'acceptLimitId': '#7',
              'acceptLimitCode': '404',
              'acceptLimitLevel': '1',
              'screenId': 'NHA-006',
              'message': '住宅ローン利用ありの場合で、且つ築年数１年超で、「試算画面」の火災保険期間が５年超であり'
            },
            {
              'acceptLimitId': '#8',
              'acceptLimitCode': '403',
              'acceptLimitLevel': '1',
              'screenId': 'NHA-002',
              'message': '建物の所在地が『北海道』の場合で、建物の築年数が10年超である',
              'alarmMessage': '建物の築年数が10年超である'
            }
          ]
        }
      }
    },
    // 2-1 /api/acceptLimitCheck_引受制限
    {
      // params: {'rules':['#7','#8'],'screenId': 'NHA-002'}
      method: 'POST', // get|post|put|patch|delete
      url: 'acceptLimitCheck', // 正規表現で設定
      response: {
        status: 200,
        data: {
          list: [
          ]
        }
      }
    },
    // 2-1 /api/estimate_見積書作成
    {
      method: 'POST', // get|post|put|patch|delete
      url: 'estimate', // 正規表現で設定
      response: {
        status: 200,
        data: {
          reportContents: {
            entryDate: '2019/01/01'
          }
        }
      }
    },
    // NHA_O_0039_引受制限決定番号を入力処理
    {
      // params: {'entryNo': 'ABB001', 'agencyCd': 'A000000001', 'screenId': 'NHA-006', 'acceptLimitRules':'#7,#8', 'acceptLimitConfirmCode': '401'}
      method: 'POST', // get|post|put|patch|delete
      url: 'acceptLimitConfirmCodeSave', // 正規表現で設定
      response: {
        // status: 500,
        // data: {
        //   result: [
        //     {
        //       errorid: 'Exxxxx1',
        //       discription: 'エラー'
        //     }
        //   ]
        // }
        status: 200,
        data: {
          list: []
        }
      }
    }
  ]

export default {
  responses
}
