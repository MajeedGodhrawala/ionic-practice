<template>
  <app-layout PageTitle="Memories">
    <ion-list>
      <ion-item
        v-for="(data, index) in memoriesData"
        :key="data.id"
        :router-link="`/memories-details/${data.id}`">
        <ion-thumbnail slot="start">
          <ion-img :src="data.image" :alt="data.title"></ion-img>
        </ion-thumbnail>
        <ion-label>{{ data.title }}</ion-label>
      </ion-item>
    </ion-list>
  </app-layout>
</template>
<script setup>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
import { reactive } from "vue";
import { memoriesData } from "../data";
</script>
