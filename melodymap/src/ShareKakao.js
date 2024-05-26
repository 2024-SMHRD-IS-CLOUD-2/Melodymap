// 공유 함수들 정의
const { Kakao } = window;

// Kakao 공유 함수
const shareKakao = (path) => {
  console.log("Kakao 공유 경로:", path);
  Kakao.Share.createCustomButton({
    container: "#kakaotalk-sharing-btn",
    templateId: 107894,
    templateArgs: {
      title: "제목 영역입니다.",
      description: "설명 영역입니다.",
      path: path,
    },
  });
};

// NAVER 공유 함수
function shareNaver(path) {
  console.log("Naver 공유 경로:", path);
  const title = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open(
    "https://share.naver.com/web/shareView?url=" +
      url +
      path +
      "&title=" +
      title
  );
}

// Facebook 공유 함수
function shareFacebook(path) {
  console.log("Facebook 공유 경로:", path);
  const title = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open(
    "http://www.facebook.com/sharer/sharer.php?u=" +
      url +
      path +
      "&title=" +
      title
  );
}

// Twitter 공유 함수
function shareTwitter(path) {
  console.log("Twitter 공유 경로:", path);
  const text = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open("https://twitter.com/intent/tweet?text=" + url + path + text);
}

// Telegram 공유 함수
function shareTelegram(path) {
  console.log("Telegram 공유 경로:", path);
  const text = "당신의 취향대로 떠나는 특별한 여행지 추천";
  const url = "https://smhrd-melodymap.com/";
  window.open(
    "https://telegram.me/share/url?url=" + url + path + "&text=" + text
  );
}

export { shareKakao, shareNaver, shareFacebook, shareTwitter, shareTelegram };
