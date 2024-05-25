const { Kakao } = window;
const shareKakao = () => {
  Kakao.Share.createCustomButton({
    container: "#kakaotalk-sharing-btn",
    templateId: 107894,
    templateArgs: {
      title: "제목 영역입니다.",
      description: "설명 영역입니다.",
    },
  });
};
// NAVER
function shareNaver() {
  const title = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open(
    "https://share.naver.com/web/shareView?url=" + url + "&title=" + title
  );
}

// Facebook
function shareFacebook() {
  const title = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open(
    "http://www.facebook.com/sharer/sharer.php?u=" + url + "&title=" + title
  );
}

// Twitter
function shareTwitter() {
  const text = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open("https://twitter.com/intent/tweet?text=" + url + text);
}

// Telegram
function shareTelegram() {
  const text = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open("https://telegram.me/share/url?url=" + url + "&text=" + text);
}
export { shareKakao, shareNaver, shareFacebook, shareTwitter, shareTelegram };
