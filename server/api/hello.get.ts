export default defineEventHandler(async (event) => {
  console.log(event)
  return {
    message: 'Hello, world!',
  }
})
