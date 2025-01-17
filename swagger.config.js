module.exports = {
  // 输出路径
  output: "src/service",
  // true 根据api会分模块输出文件，false会将所有模块输出到一个文件
  modular: true,
  // 选择http请求框架
  httpClientType: "axios",
  // requireSelfAxios: '/request/index.ts',
  // swagger接口文档
  url: "",
  // 类型映射器
  primitiveTypeConstructs: () => ({
    integer: {
      int32: () => "number",
      int64: () => "string",
    },
  }),
}