// API 기본 주소
const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";
// API에 요청할 때 필요한 옵션을 객체로 만들기
const option = {
  serviceKey:
    "2rlT6qRgs4FALkKDzP8%2BFA94ExGvWIldshDGOTfbBX%2BnP7OE30RnB4xodJazUUU737lg9Z8krzE1%2BGJJ%2FO%2F4zQ%3D%3D",
  numOfRows: 6, // 한 번에 가져올 사진 개수
  MobileApp: "test",
  MobileOS: "ETC",
  arrange: "A", // 기본 정렬 (제목순순)
  _type: "json",
};

// html에서 id가 container인 div 태그 가져오기
const container = document.getElementById('container');

// getData 함수: 서버에서 사진 데이터 가져오기
async function getData() {
  /* 페이지 번호를 1~100 사이 무작위 숫자로 뽑기
  Math.random()은 0~1 사이의 랜덤 숫자를 만들고,
  Math.random() * 100 하면 위 랜덤 소수를 100배해서 0이상 100미만의숫자를 만듦 (아직 100은 미포함)
  Math.floor()는 소수점을 버려 정수로 만듦
  +1을 해서 1부터 100까지의 정수로 만듦 */
  const randomPage = Math.floor(Math.random() * 100) + 1;
  const url = `${baseURL}/galleryList1?numOfRows=${option.numOfRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${randomPage}&serviceKey=${option.serviceKey}`;

  // try 안에서 코드 실행, 오류 나면 catch로 이동
  try {
    const fetchData = await fetch(url);
    const toJson = await fetchData.json();
    const datas = toJson.response.body.items.item;  // API가 제공하는 데이터 구조!!!

    // datas = 사진 데이터 배열
    // forEach = 배열의 각 데이터를 하나씩 처리
    // i = 인덱스
    datas.forEach((data, i) => {
      const list = document.createElement('div');
      list.id = 'list';

      const image = document.createElement('img');
      image.src = data.galWebImageUrl;

      const info = document.createElement('span');
      info.innerText = `
      ${i + 1}번째 사진
      제목: ${data.galTitle}
      장소: ${data.galPhotographyLocation}`;

      // 더보기 버튼
      const button = document.createElement('button');
      button.innerText = "더보기";
      button.onclick = () => {
        // 상세 페이지로 데이터 전달
        // sessionStorage = 브라우저에 데이터를 잠시 저장하는 곳
        // stringify(data) =  데이터를 문자열로 변환
        sessionStorage.setItem('photoData', JSON.stringify(data));
        // 새 탭에서 detail.html 열기
        // _blank = 새 탭
        window.open('detail.html', '_blank');
      };

      // list div에 붙이기
      list.appendChild(image);
      list.appendChild(info);
      list.appendChild(button);

      // 완성된 list div를 container에 추가하여 화면에 표시
      container.appendChild(list);
    });
  } catch (error) {
    console.error('데이터 가져오기 오류:', error);
  }
}