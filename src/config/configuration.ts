import { registerAs } from "@nestjs/config"

export default registerAs('config', () => {
  return {
    Port: process.env.PORT
  }
})
