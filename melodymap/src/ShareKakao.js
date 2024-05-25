const { Kakao } = window;

const generateQueryParams = (music, place, sleep, choice) => {
  return new URLSearchParams({
    music: JSON.stringify(music),
    place: JSON.stringify(place),
    sleep: sleep || "",
    choice: Array.isArray(choice) ? choice.join(",") : choice, // 배열이 아니면 그대로 사용
  }).toString();
};

const generateFullShareUrl = (queryParams) => {
  return `https://smhrd-melodymap.com/?${queryParams}`;
};

export const shareKakao = (music, place, sleep, choice) => {
  const queryParams = generateQueryParams(music, place, sleep, choice);
  Kakao.Share.createCustomButton({
    container: "#kakaotalk-sharing-btn",
    templateId: 107894,
    templateArgs: {
      title: "당신의 취향대로 떠나는 특별한 여행지 추천",
      description: "설명 영역입니다.",
      url: `/path?${queryParams}`, // 도메인 제외하고 경로만 전달
    },
  });
};

export const shareNaver = (music, place, sleep, choice) => {
  const queryParams = generateQueryParams(music, place, sleep, choice);
  const url = generateFullShareUrl(queryParams);
  window.open(
    `https://share.naver.com/web/shareView?url=${encodeURIComponent(
      url
    )}&title=당신의 취향대로 떠나는 특별한 여행지 추천`
  );
};

export const shareFacebook = (music, place, sleep, choice) => {
  const queryParams = generateQueryParams(music, place, sleep, choice);
  const url = generateFullShareUrl(queryParams);
  window.open(
    `http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  );
};

export const shareTwitter = (music, place, sleep, choice) => {
  const queryParams = generateQueryParams(music, place, sleep, choice);
  const url = generateFullShareUrl(queryParams);
  window.open(
    `https://twitter.com/intent/tweet?text=당신의 취향대로 떠나는 특별한 여행지 추천&url=${encodeURIComponent(
      url
    )}`
  );
};

export const shareTelegram = (music, place, sleep, choice) => {
  const queryParams = generateQueryParams(music, place, sleep, choice);
  const url = generateFullShareUrl(queryParams);
  window.open(
    `https://telegram.me/share/url?url=${encodeURIComponent(
      url
    )}&text=당신의 취향대로 떠나는 특별한 여행지 추천`
  );
};
