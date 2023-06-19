<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost"/>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import sourceData from '@/assets/data.json'
export default {
  name: 'ThreadShow',
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find((thread) => thread.id === this.id) // also avaliable under this.$route.oarams.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.posts,
        threadId: this.id
      }
      this.posts.push(post)
      this.thread.posts.push(post.id)
    }
  }
}
</script>

<style scoped></style>
