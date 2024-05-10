<template>
  <p>
    <l-button type="primary" loading>Loading</l-button>
    <l-button type="primary" loading-icon="circle-notch" loading>Loading</l-button>
    <l-button type="primary" loading>
      <template #loading>
        <l-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </l-button>
  </p>
</template>
