<script>
export default {
    props: [
        'type',
        'active',
        'counter',
    ],
}
</script>

<template>
<li class="nav-item">
    <a @click.prevent="$emit( 'select', type )" :class="{ 'active': active == type }" class="nav-link" href="#">
        {{ type }} ({{ counter( type ) }})
    </a>
</li>
</template>