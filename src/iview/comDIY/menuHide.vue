<template>
  <ul style="text-align: center;z-index: 2;">
    <li v-for="items in menuHideList" :key="items.name" style="margin-top: 15px;">
      <Dropdown   placement="right-start">
        <span  @click="liSpanClick()" style="color: #eeeeee;margin-right: 20px;cursor:pointer">
          <Icon :type="items.icon" size="22" style="color: #e9eaec;cursor:pointer"></Icon>
        </span>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem>豆汁儿</DropdownItem>
          <Dropdown  placement="right-start">
            <DropdownItem>
              北京烤鸭
              <Icon type="ios-arrow-right"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
              <DropdownItem>挂炉烤鸭</DropdownItem>
              <DropdownItem>焖炉烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <DropdownItem>冰糖葫芦</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </li>
  </ul>

</template>

<script>
    export default {
      name: "menuHide",
      props: ['menuHideList'],
      data () {
        return {
          transfer: true,
        }
      },
      methods: {
        liSpanClick (val) {
          console.log(val);

        }
      }

    }
</script>

<style scoped>

</style>
