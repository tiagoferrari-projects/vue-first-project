<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}
      <router-link :to="{ name: 'ThreadEdit', id: this.id }" class="btn-green btn-small" :v-slot="button">
        Edit Thread
      </router-link>
    </h1>

    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostEditor from '@/components/PostEditor.vue'

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
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    },
    thread () {
      return this.$store.getters['threads/thread'](this.id)
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
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>

<style scoped></style>
