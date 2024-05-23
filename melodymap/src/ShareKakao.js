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
  const title = "타이틀 입력";
  const url = "https://sample.com/index.php";
  window.open(
    "https://share.naver.com/web/shareView?url=" + url + "&title=" + title
  );
}

// Facebook
function shareFacebook() {
  const title = "타이틀 입력";
  const url = "https://sample.com/index.php";
  window.open(
    "http://www.facebook.com/sharer/sharer.php?u=" + url + "&title=" + title
  );
}

// Twitter
function shareTwitter() {
  const text = "내용 입력";
  const url = "https://sample.com/index.php";
  window.open("https://twitter.com/intent/tweet?text=" + url + text);
}

// Telegram
function shareTelegram() {
  const text = "내용 입력";
  const url = "http://localhost:3000/Result";
  window.open("https://telegram.me/share/url?url=" + url + "&text=" + text);
}
export { shareKakao, shareNaver, shareFacebook, shareTwitter, shareTelegram };
