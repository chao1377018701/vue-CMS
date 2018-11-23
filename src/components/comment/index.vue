<template>
    <div class="comment-container">
        
        <textarea placeholder="请输入您要评论的内容!最多输入120字" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in commentList" :key="index">
                <div class="comment-title">
                    第{{index+1}}楼&nbsp;&nbsp;
                    用户:{{item.user_name}}&nbsp;&nbsp;
                    发表时间:{{item.add_time | dateFormat}}
                </div>
                <div class="comment-content">
                    <!-- {{item.content || '此人有点懒'}} -->
                    {{item.content == "undefined"? item.content='此人有点懒,啥也没留下' : item.content || '此人有点懒'}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  data() {
    return {
      pageIndex: 1,
      commentList: [],
      msg: "" //输入的评论内容
    };
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          //把后请求到的数据添加到原有评论列表后面
          this.commentList = this.commentList.concat(result.body.message);
        });
    },
    loadMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(res => {
          if (res.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
          }
          this.commentList.unshift(cmt);
          this.msg = "";
        });
    }
  },
  created() {
    this.getComments();
  }
};
</script>
<style lang="less">
.comment-container {
  textarea {
    margin-top: 20px;
    font-size: 12px;
    height: 80px;
  }
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
