<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ionTitle> {{ PageTitle }} </ionTitle>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>
<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const props = defineProps({
    PageTitle:String,
});

</script>
