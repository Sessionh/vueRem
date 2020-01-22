<template>
  <div class="my-button" :style="{background: bgColor}" @click="click">

  
    <div class="loader" v-if="isLoad">
      <div class="loader-inner line-scale" >
        <div :style="{background: iconColor}"></div>
        <div :style="{background: iconColor}"></div>
        <div :style="{background: iconColor}"></div>
        <div :style="{background: iconColor}"></div>
      </div>
    </div>

    <div class="text" v-if="!isLoad">
      {{text}}
    </div>
    

  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: ''

    },
    iconColor: {
      type: String,
      default: '#999999'
    },
    iconHeight: {
      type: Number,
      default: 46
    },
    isLoad: {
       type: Boolean,
      default: false
    },
     text: {
      type: String,
      default: ''
    },

  },
  data() {
    return {

    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.my-button {
  /* background: #fff; */
  width: 100%;
  height: 88px;
  text-align: center;
  color: #fff;
  font-size: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
 
}




.loader {
  height: 66px;
  width: auto;
}

/**
* Lines
*/
.line-scale {
  height: 46px;

}
@keyframes line-scale {
  0% {
    transform: scaley(1);
  }

  50% {
    transform: scaley(0.4);
  }

  100% {
    transform: scaley(1);
  }
}

.line-scale > div:nth-child(1) {
  animation: line-scale 1s 0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
.line-scale > div:nth-child(2) {
  animation: line-scale 1s 0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
.line-scale > div:nth-child(3) {
  animation: line-scale 1s 0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
.line-scale > div:nth-child(4) {
  animation: line-scale 1s 0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
.line-scale > div:nth-child(5) {
  animation: line-scale 1s 0.5s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
}
.line-scale > div {
  background-color: #fff;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  margin: 5px;
  animation-fill-mode: both;
  display: inline-block;
}

.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 5.2px;
  left: 40.6px;
  width: 6px;
  height: 18px;
  /* border-radius: 20%; */
  background: #fff;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>