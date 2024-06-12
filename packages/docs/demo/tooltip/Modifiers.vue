<template>
  <div>
    <l-row justify="center">
      <l-button
        status="primary"
        v-tooltip.top="'This is a two-line tooltip content.This is a two-line tooltip content.'"
        >Top</l-button
      >
    </l-row>
    <l-row justify="space-between" :span="24">
      <l-col :span="4">
        <l-button
          status="primary"
          v-tooltip.left="'This is a two-line tooltip content.This is a two-line tooltip content.'"
          >Left</l-button
        >
      </l-col>
      <l-col :span="4">
        <l-button
          status="primary"
          v-tooltip.right="'This is a two-line tooltip content.This is a two-line tooltip content.'"
          >Right</l-button
        >
      </l-col>
    </l-row>
    <l-row justify="center">
      <l-button
        status="primary"
        v-tooltip.bottom="'This is a two-line tooltip content.This is a two-line tooltip content.'"
        >Bottom</l-button
      >
    </l-row>
  </div>
</template>
