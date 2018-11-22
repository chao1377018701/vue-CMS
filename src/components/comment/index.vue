<template>
    <div class="comment-container">
        
        <textarea placeholder="请输入您要评论的内容!最多输入120字" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in commentList" :key="index">
                <div class="comment-title">
                    第{{index+1}}楼&nbsp;&nbsp;
                    用户:{{item.user_name}}&nbsp;&nbsp;
                    发表时间:{{item.add_time | dateFormat}}
                </div>
                <div class="comment-content">
                    <!-- {{item.content || '此人有点懒'}} -->
                    {{item.content == "undefined"? item.content='此人有点懒,啥也没留下' : item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    props:['id'],
    data(){
        return{
            pageIndex:1,
            commentList:[]
        }
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex=" + this.pageIndex)
            .then(result=>{
                this.commentList=result.body.message;
            })
        }
    },
    created(){
        this.getComments()
    }    
}
</script>
<style lang="less">
.comment-container {
  .comment-list {
    .comment-item {
      margin: 5px 0;
      .comment-title {
        font-size: 13px;
        background-color: #ccc;
      }
      .comment-content {
        font-size: 13px;
      }
    }
  }
}
</style>
