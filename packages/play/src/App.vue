<script setup lang="ts"></script>

<template>
  <div>
    <l-button status="success">Previous Page</l-button>

    <l-button-group>
      <l-button type="primary" icon="arrow-left">Previous Page</l-button>
      <l-button type="primary">
        Next Page<l-icon icon="arrow-right" style="margin-left: 8px" />
      </l-button>
    </l-button-group>
  </div>
  <div>
    <l-button-group type="primary" size="small">
      <l-button status="warning" icon="edit" />
      <l-button status="warning" icon="share" />
      <l-button status="warning" icon="trash" />
    </l-button-group>
  </div>
</template>
