<!--索引搜索-->
<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <van-index-bar :index-list="indexList">
      <template v-for="(item, i) in fillterData">
        <van-index-anchor :index="item.index" :key="i">
          {{ item.index }}
        </van-index-anchor>
        <van-cell
          :title="query.name"
          :icon="storeIcon"
          :key="k"
          v-for="(query, k) in item.childrens"
          @click="toggleStore(item.childrens[k])"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          index: 'A',
          childrens: [
            { name: 'A1深圳华为旗舰店' },
            { name: 'A2东莞华为旗舰店' }
          ]
        },
        {
          index: 'B',
          childrens: [
            { name: 'B1深圳华为旗舰店' },
            { name: 'B2东莞华为旗舰店' }
          ]
        },
        {
          index: 'C',
          childrens: [{ name: 'C深圳华为旗舰店' }, { name: 'C东莞华为旗舰店' }]
        },
        {
          index: 'D',
          childrens: [{ name: 'D深圳华为旗舰店' }, { name: 'D东莞华为旗舰店' }]
        },
        {
          index: 'E',
          childrens: [{ name: 'E深圳华为旗舰店' }, { name: 'E东莞华为旗舰店' }]
        }
      ],
      storeIcon: require('@/assets/images/header/storeIcon.png'),
      searchValue: ''
    }
  },
  computed: {
    indexList() {
      return this.fillterData.map(item => {
        return item.index
      })
    },
    fillterData() {
      if (this.searchValue) {
        return this.getSearchData(this.listData, this.searchValue)
      }
      return this.listData
    }
  },
  mounted() {},
  methods: {
    // 返回筛选后的数组
    getSearchData(arr, value) {
      if (value) {
        var target = []
        arr.forEach((item, i) => {
          // 赋值
          target[i] = { index: item.index, childrens: [] }
          // 遍历childrens
          for (const k in item.childrens) {
            if (item.childrens[k].name.includes(value)) {
              // 数据源相同
              target[i].childrens.push(item.childrens[k])
            }
          }
        })
        return target.filter(query => {
          return query.childrens.length !== 0
        })
      }
    },
    toggleStore(data) {
      // console.log(data)
      this.$emit('storeData', data)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-index-bar__sidebar {
  top: 75%;
}
</style>
