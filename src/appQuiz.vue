<template>

    <div>
        <button @click="showModal('AlertModal', { message: '안녕하세요!' })">
            알림 모달
        </button>
        <button @click="showModal('ConfirmModal', { message: '저장하시겠습니까?' })">
            확인 모달
        </button>
        <button @click="showModal('InputModal', { title: '사용자 입력' })">
            확인 모달
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
import ConfirmModal from './quiz1compo/ConfirmModal.vue'
import InputModal from './quiz1compo/InputModal.vue'

export default{
    components:{
        AlertModal,
        ConfirmModal,
        InputModal
    },
    data(){
        return{
            currentModal: null,
            modalProps: {}
        }
    },
    methods:{
        showModal(type, props = {}){
            this.currentModal = type
            this.modalProps = props
        },
        closeModal(){
            this.currentModal = null
            this.modalProps = {}
        },
        handleConfirm(data){
            // 여기서는 확인 눌렀을때 다른 이벤트를 수행하는것또한 가능.
            console.log('확인 눌렀나?', data);
            this.closeModal();
        }
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