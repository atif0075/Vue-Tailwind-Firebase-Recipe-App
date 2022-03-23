import { ref } from "vue";
import { store } from '../store/store'

let zone: HTMLElement = document.querySelector("#zone") as HTMLElement;

export default function useDropZone() {
    const dragActive = ref(false);
    const droppedFile = ref(null);
    const toggle_active = () => {
        if (droppedFile.value === null) {
            dragActive.value = !dragActive.value;
        }
    };

    const drop = (event: any) => {
        droppedFile.value = event.dataTransfer.files[0];
        console.log(event.dataTransfer.files[0]);
        if (!event.dataTransfer.files[0].type.match(/image.*/)) {
            store.state.error = true
            droppedFile.value = null;
            dragActive.value = false;
            setTimeout(() => {
                store.state.error = false
            }, 3000);

        }
    };


    const selectedFile = (event: any) => {
        droppedFile.value = event.target.files[0];
        dragActive.value = true;
        if (!event.target.files[0].type.match(/image.*/)) {
            store.state.error = true
            droppedFile.value = null;
            dragActive.value = false;
            setTimeout(() => {
                store.state.error = false
            }, 3000);
        }

    };

    const clearDropped = () => {
        droppedFile.value = null;
        dragActive.value = false;
    };

    return {
        dragActive,
        droppedFile,
        toggle_active,
        drop,
        selectedFile,
        clearDropped,

    }
}
