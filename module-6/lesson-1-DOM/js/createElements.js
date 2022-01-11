const containerRef = document.querySelector('.container');
const imgLink =
  'https://naurok-test.nyc3.cdn.digitaloceanspaces.com/uploads/test/446833/162960/610866_1586247693.jpg';

const imageWrapper = document.createElement('div');
const image = document.createElement('img');
image.classList.add('thumb');
image.src = imgLink;
// image.setAttribute('src', imgLink);

imageWrapper.append(image);
containerRef.append(imageWrapper);

const imgContainerRef = document.querySelector('.img-container');
// Alex <img src="dsadsa" onerror="alert(1111)" />
imgContainerRef.innerHTML = `
  <div>
    <img src="dsadsa" onerror="alert(1111)">
  </div>
`;
