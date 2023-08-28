<script>
export default {
    props: [
        'task',
    ],
}
</script>

<template>
<div class="list-group-item list-group-item-action d-flex align-items-center">
    <a @click.prevent="$emit( 'edit', task.id )" :class="[ task.done ? 'btn-outline-success' : 'btn-outline-secondary text-white' ]" class="btn btn-sm me-2">
        <font-awesome-icon icon="fa-solid fa-check" />
    </a>

    <p :class="{ 'text-decoration-line-through': task.done }" class="flex-grow-1 mb-0 text-secondary">{{ task.label }}</p>

    <a @click.prevent="$emit( 'delete', task.id )" class="btn btn-sm text-danger">
        <font-awesome-icon icon="fa-solid fa-trash" />
    </a>
</div>
</template>