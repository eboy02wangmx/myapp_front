/* eslint-disable no-multi-spaces */
/**
 * 依頼書印刷用
 *
 * （API定義に、画面で使用する項目を拡張）
 */
export default () => {
  return {
    pdfType: '',  // 0--->Top画面から空依頼書作成  1-->依頼書作成
    INSATU_NO: null,  // 印刷連番"
    POLICY: null,  // 証券番号"
    KASHO_CD: null,  // 営業課店 コード"
    DAIRITEN_CD: null,  // 代理店 コード"
    SHIKI_NENG: null,  // 保険始期 年号"
    SHIKI_NEN: null,  // 保険始期 年"
    SHIKI_TUKI: null,  // 保険始期 月"
    SHIKI_HI: null,  // 保険始期 日"
    SHUKI_NENKAN: null,  // 保険始期 年間"
    KNAME_K: null,  // 保険契約者
    KNAME: null,  // 保険契約者 フリガナ"
    HARAI_HOHO: null,  // 払込方法"
    IDO_UKE_KBN: null,  // 取扱事由"
    IRAI_NENG: null,  // 依頼日 年号
    IRAI_NEN: null,  // 依頼日 年"
    IRAI_TUKI: null,  // 依頼日 月
    IRAI_HI: null,  // 依頼日 日"
    YOKINSHA_MEI_K: null,  // 口座名義人"
    YOKINSHA_MEI: null,  // 口座名義人 フリガナ
    GINKO_CD: null,  // ゆうちょ銀行以外 金融機関コード"
    GINKO_SHITEN_CD: null,  // ゆうちょ銀行以外 店番号"
    YOKIN_SHURUI: null,  // ゆうちょ銀行以外 預金種目
    KOZA_NO: null,  // ゆうちょ銀行以外 口座番号
    FURIKAE_DD: null,  // ゆうちょ銀行以外 振替日
    FURIKAE_KAISHI_NENG: null,  // ゆうちょ銀行以外 振替開始(変更)月 年号"
    FURIKAE_KAISHI_NEN: null,  // ゆうちょ銀行以外 振替開始(変更)月 年"
    FURIKAE_KAISHI_TUKI: null,  // ゆうちょ銀行以外 振替開始(変更)月 月"
    RYOSHU_HAGAKI_FUYO: null,  // 振替済通知(領収書)"
    ICHIKAIBUN_HOKENRYO_SHU: null,  // 1回分保険料 主契約"
    ICHIKAIBUN_HOKENRYO_JI: null,  // 1回分保険料 地震"
    KASHO_MEI_K: null,  // 営業課店 名称"
    KASHO_MEI_K1: null,  // 営業課店 名称"
    DAIRI_MEI_K: null,  // 代理店 名称"
    DAIRI_MEI_K1: null,  // 代理店 名称"
    GINKO_NM_KNA: null,  // ゆうちょ銀行以外 金融機関 フリガナ"
    GINKO_NM_KNJ: null,  // ゆうちょ銀行以外 金融機関名"
    GINKO_NM_KNJ1: null,  // ゆうちょ銀行以外 金融機関名"
    GINKO_SHITEN_NM_KNA: null,  // ゆうちょ銀行以外 支店 フリガナ"
    GINKO_SHITEN_NM_KNJ: null,  // ゆうちょ銀行以外 支店名"
    GINKO_SHITEN_NM_KNJ1: null,  // ゆうちょ銀行以外 支店名
    YUCHO_GINKO_SHITEN_CD: null,  // ゆうちょ銀行 通帳記号
    YUCHO_KIGO_SIX: null,  // ゆうちょ銀行 通帳記号 6桁目
    YUCHO_KOZA_NO: null,  // ゆうちょ銀行 通帳番号
    YUCHO_FURIKAE_KAISHI_NENG: null,  // ゆうちょ銀行 払込開始(変更)月 年号
    YUCHO_FURIKAE_KAISHI_NEN: null,  // ゆうちょ銀行 払込開始(変更)月 年
    YUCHO_FURIKAE_KAISHI_TUKI: null  // ゆうちょ銀行 払込開始(変更)月 月
  }
}
