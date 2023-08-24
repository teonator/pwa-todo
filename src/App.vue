<script>
export default {
    data() {
        return {
            tasks: [],
            task: '',
        }
    },
    methods: {
        addTask() {
            this.tasks.push( {
                id: new Date().valueOf(),
                label: this.task,
                done: false,
            } );

            this.task = '';
        },
    },
}
</script>

<template>
<div class="container mt-5">
    <header>
        <h1>Todo</h1>
    </header>

    <main class="card my-3">
        <div class="card-body p-5">

            <form class="d-flex mb-1">
                <input  @keydown.enter.prevent="addTask" v-model="task" type="text" class="form-control me-2" placeholder="New task..." />
                <button class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </form>

            <div class="d-flex align-items-center mt-4">
                <h4 class="flex-fill m-0">Tasks</h4>

                <ul class="nav nav-underline flex-fill justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            All (0)
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Pending (0)
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Done (0)
                        </a>
                    </li>
                </ul>
            </div>

            <div class="list-group mt-3">
                <div v-for="task in tasks" class="list-group-item list-group-item-action d-flex align-items-center">
                    <a class="btn btn-sm me-2 btn-outline-secondary text-white">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </a>

                    <p class="flex-grow-1 mb-0 text-secondary">{{ task.label }}</p>

                    <a class="btn btn-sm text-danger">
                        <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                </div>
            </div>

        </div>
    </main>

    <footer class="text-body-secondary text-end">
        <p>Made with <a href="https://vuejs.org" target="_blank">Vue.js</a></p>
    </footer>
</div>
</template>
