<template>
  <div>
    <l-row justify="center">
      <l-button
        status="primary"
        v-tooltip="{
          content: 'This is a two-line tooltip content.This is a two-line tooltip content.',
          position: 'top'
        }"
        >Top</l-button
      >
    </l-row>
    <l-row justify="space-between" :span="24">
      <l-col :span="4">
        <l-button
          status="primary"
          v-tooltip="{
            content: 'This is a two-line tooltip content.This is a two-line tooltip content.',
            position: 'left'
          }"
          >Left</l-button
        >
      </l-col>
      <l-col :span="4">
        <l-button
          status="primary"
          v-tooltip="{
            content: 'This is a two-line tooltip content.This is a two-line tooltip content.',
            position: 'right'
          }"
          >Right</l-button
        >
      </l-col>
    </l-row>
    <l-row justify="center">
      <l-button
        status="primary"
        v-tooltip="{
          content: 'This is a two-line tooltip content.This is a two-line tooltip content.',
          position: 'bottom'
        }"
        >Bottom</l-button
      >
    </l-row>
  </div>
</template>
