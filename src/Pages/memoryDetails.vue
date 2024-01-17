<template>
  <app-layout PageTitle="Memories Details" pageDefaultBackLink="/memories">
    <h4 v-if="!data.memory">Don't Have Data For Given Id</h4>
    <ion-card v-else color="warning">
      <img :alt="data.memory.title" :src="data.memory.image" />
      <ion-card-header>
        <ion-card-title>{{ data.memory.title }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        {{ data.memory.description }}
      </ion-card-content>
    </ion-card>
  </app-layout>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import { memoriesData } from "../data";
const route = useRoute();
const data = reactive({
  memory: Object,
});

onMounted(() => {
  data.memory = memoriesData.find((memory) => memory.id == route.params.id);
});
</script>
