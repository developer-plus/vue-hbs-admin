<template>
  <div class="not-found">
    <svg
      width="380px"
      height="500px"
      viewBox="0 0 837 1045"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <path
          id="Polygon-1"
          d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z"
          stroke="#007FB2"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        />
        <path
          id="Polygon-2"
          d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z"
          stroke="#EF4A5B"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        />
        <path
          id="Polygon-3"
          d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z"
          stroke="#795D9C"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        />
        <path
          id="Polygon-4"
          d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z"
          stroke="#F2773F"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        />
        <path
          id="Polygon-5"
          d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z"
          stroke="#36B455"
          stroke-width="6"
          sketch:type="MSShapeGroup"
        />
      </g>
    </svg>
    <div class="message-box">
      <h1>404</h1>
      <p>抱歉，您访问的页面不存在</p>
      <div class="buttons-con">
        <!-- <div class="action-link-wrap">
          <a onclick="history.back(-1)" class="link-button link-back-button">
            返回
          </a>
          <a href="/" class="link-button"> 回到首页 </a>
        </div> -->
        <a-space class="space-wrap">
          <a-button type="primary" onclick="history.back(-1)">
            返回
          </a-button>
          <a-button type="primary" href="/">
            回到首页
          </a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.not-found {
  height: 100%;
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -400px;
  }
  .message-box {
    height: 200px;
    width: 380px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: 50px;
    color: rgba(107, 114, 128, 1);
    font-family: Roboto;
    font-weight: 300;
    h1 {
      font-size: 59px;
      line-height: 46px;
      margin-bottom: 40px;
    }
    .buttons-con {
      .action-link-wrap {
        margin-top: 40px;
        .link-button {
          background: #68c950;
          padding: 8px 25px;
          border-radius: 4px;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          transition: all 0.3s linear;
          cursor: pointer;
          text-decoration: none;
          margin-right: 10px;
        }
        .link-button:hover {
          background: #5a5c6c;
          color: #fff;
        }
      }
      .space-wrap {
        margin-top: 10px;
      }
    }
  }
}
#Polygon-1,
#Polygon-2,
#Polygon-3,
#Polygon-4,
#Polygon-4,
#Polygon-5 {
  animation: float 1s infinite ease-in-out alternate;
}
#Polygon-2 {
  animation-delay: 0.2s;
}
#Polygon-3 {
  animation-delay: 0.4s;
}
#Polygon-4 {
  animation-delay: 0.6s;
}
#Polygon-5 {
  animation-delay: 0.8s;
}
@keyframes float {
  100% {
    transform: translateY(20px);
  }
}
@media (max-width: 450px) {
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -190px;
  }
  .message-box {
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -190px;
    text-align: center;
  }
}
</style>
