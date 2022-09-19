// 车辆监测模块
// 柱状图2
(function () {
    var myColor = ["red"];
    // 1 实例化对象
    var myChart = echarts.init(document.querySelector(".car .chart"));
    // 2 指定配置项和数据
    var option = {
        grid: {
          top: "0%",
          left: '22%',
          //bottom: '10%',
          //containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['车位剩余容量'],
                // 不显示y轴的线
                axisLine: {
                  show: false
                },
                // 不显示y轴刻度
                axisTick: {
                  show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                  color: "#fff"
                }
              },
              {
                show: true,
                //type: 'category',
                inverse: true,
                data: [1400],
                // 不显示y轴的线
                axisLine: {
                  show: false
                },
                // 不显示y轴刻度
                axisTick: {
                  show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                  color: "#fff"
                }
              },
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [parseInt(100-892/1400*100)],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
                barBorderRadius: 20,
                // 此时的color可以修改柱子的颜色
                color: function(params) {
                    // params 传进来的是柱子对象
                    return myColor[params.dataIndex];
                }
            },
            // 修改柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
                show: true,
                position: "inside",
                // {c}会自动解析为data数据
                formatter: "{c}%"
            }
          },
          {
            name: '框',
            type: 'bar',
            data: [100],
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
                color: "none",
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
            }
          }
        ]
      };
    // 3 把配置给实例对象
    myChart.setOption(option);
    // 4 图标跟随屏幕自适应
    window.addEventListener('resize', function(){
        myChart.resize();
    })
})();

// 人员性别分布模块
(function () {
    // 1 实例化对象
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    // 2 指定配置
    var option = {
        color: ["#065aab", "#066eab", "#0682ab","#0686ab", "#06a0ab"],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '0%',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: '年龄分布',
            type: 'pie',
            radius: ['40%', '60%'], // [内圆半径，外圆半径]
            center: ["30%", "45%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1, name: '20岁以下' },
              { value: 4, name: '20-29岁' },
              { value: 2, name: '30-39岁' },
              { value: 2, name: '40-49岁' },
              { value: 1, name: '50岁以上' }
            ]
          },
          {
            name: '性别分布',
            type: 'pie',
            color: ["lightblue", "pink"],
            radius: ['0%', '60%'], // [内圆半径，外圆半径]
            center: ["70%", "45%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 2250, name: '男' },
              { value: 1000, name: '女' }
            ]
          }
        ]
      };
    // 3 配置给实例对象
    myChart.setOption(option);
    // 4 大小自适应
    window.addEventListener('resize', function(){
        myChart.resize();
    })
})();
// 口罩佩戴情况模块
(function () {
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: "0%",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: '口罩佩戴',
            type: 'pie',
            radius: ["10%", "70%"],
            center: ['50%', '50%'],
            roseType: 'radius',
            // 图形的文字标签
            label: {
                fontSize: 10
            },
            //连接图形和文字的线条
            labelLine: {
                // 连接图形的线条
                length: 6,
                // 连接欸文字的线条
                length2: 8
            },
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 2500, name: '佩戴' },
              { value: 750, name: '未佩戴' },
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize', function(){
        myChart.resize();
    })
})();
// 工服安全帽及危险动作告警
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2 指定配置项和数据
    var option = {
        grid: {
          top: "10%",
          left: '22%',
          //bottom: '10%',
          //containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
          show: false
        },
        yAxis: [
            {
                type: 'category',
                inverse: true,
                data: ['工服穿戴', '安全帽佩戴'],
                // 不显示y轴的线
                axisLine: {
                  show: false
                },
                // 不显示y轴刻度
                axisTick: {
                  show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                  color: "#fff"
                }
              },
              {
                show: true,
                //type: 'category',
                inverse: true,
                data: [1200, 900],
                // 不显示y轴的线
                axisLine: {
                  show: false
                },
                // 不显示y轴刻度
                axisTick: {
                  show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                  color: "#fff"
                }
              },
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            data: [70, 80],
            yAxisIndex: 0,
            // 修改第一组柱子的圆角
            itemStyle: {
                barBorderRadius: 20,
                // 此时的color可以修改柱子的颜色
                color: function(params) {
                    // params 传进来的是柱子对象
                    return myColor[params.dataIndex];
                }
            },
            // 修改柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 显示柱子内的文字
            label: {
                show: true,
                position: "inside",
                // {c}会自动解析为data数据
                formatter: "{c}%"
            }
          },
          {
            name: '框',
            type: 'bar',
            data: [100, 100],
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
                color: "none",
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
            }
          }
        ]
      };
    // 3 把配置给实例对象
    myChart.setOption(option);
    // 4 图标跟随屏幕自适应
    window.addEventListener('resize', function(){
        myChart.resize();
    })
})();

// 人流量折线图
(function () {
    var myChart = echarts.init(document.querySelector('.line .chart'));
    var option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
            top: "10%",
          data: ['入园', '出园'],
          textStyle: {
            color: "rgba(255,255,255,.5",
            fontSize: "12"
          }
        },
        grid: {
          left: '10',
          top: '20%',
          right: '10',
          bottom: '30%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ["0-1","1-2","2-3","3-4","4-5","5-6","6-7","7-8","8-9","9-10","10-11","11-12","12-13","13-14","14-15","15-16","16-17","17-18","18-19","19-20","20-21","21-22","22-23","23-24"],
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTickL: { show: false},
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.2)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
          }
        ],
        series: [
          {
            name: '入园',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: "#0184d5",
                width: "3"
            },
            // 填充颜色
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "rgba(1, 132, 213, 0.4)"  //渐变颜色的起始颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(1, 132, 213, 0.1)" //渐变颜色的结束颜色
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            // 设置拐点
            symbol: "circle",
            // 拐点大小
            symbolSize: 8,
            showSymbol: false,
            itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            data: [0, 0, 0, 0, 2, 5, 30, 78, 250, 120, 30, 40, 120, 40, 30, 40, 30, 10, 10, 10, 0, 0, 0, 0]
          },
          {
            name: '出园',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: "#00d887",
                width: "3"
            },
            // 填充颜色
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"  //渐变颜色的起始颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 216, 135, 0.1)" //渐变颜色的结束颜色
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            // 设置拐点
            symbol: "circle",
            // 拐点大小
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
            },
            data: [0, 0, 0, 0, 0, 0, 5, 10, 30, 20, 180, 120, 20, 10, 10, 40, 120, 150, 20, 5, 0, 0, 0, 0]
          }
        ]
      };
      myChart.setOption(option);
      // 4 图标跟随屏幕自适应
    window.addEventListener('resize', function(){
        myChart.resize();
    })
})();