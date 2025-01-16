<template>

    <div>
        <button @click="showModal('AlertModal', { message: '안녕하세요!' })">
            알림 모달
        </button>

        <transition name="modal">
            <component
                v-if="currentModal"
                :is="currentModal"
                v-bind="modalProps"
                @close="closeModal"
                @confirm="handleConfirm"
            ></component>
        </transition>
    </div>

</template>

<script>
import AlertModal from './quiz1compo/AlertModal.vue'

export default{
    components:{
        AlertModal
    },
    data(){
        return{

        }
    },
    methods:{

    }
}

</script>

<style>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>