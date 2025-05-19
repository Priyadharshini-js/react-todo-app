export const Filters = [
    { name: 'All', value: 'all' },
    { name: 'Active', value: 'active' },
    { name: 'Completed', value: 'completed' },
]

export const filterFunction = {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
}