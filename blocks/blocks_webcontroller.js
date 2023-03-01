Blockly.defineBlocksWithJsonArray(
[
{
  "type": "websocket_begin",
  "message0": "啟動WebSocket伺服器 || 服務埠號 : %1",
  "args0": [
    {
      "type": "field_number",
      "name": "port",
      "value": 80
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "web_onpath_handlecmd",
  "message0": "接收網頁資料後，處理函數 %1程式區 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "key_in_args",
  "message0": "參數名稱: %1 是否在查詢字串格式中?",
  "args0": [
    {
      "type": "field_input",
      "name": "key",
      "text": ""
    }
  ],
  "output": "Boolean",
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_tile",
  "message0": "設定網頁伺服器，控制介面-主標題 : %1  %2 程式區 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "title_name",
      "text": "遙控器"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_table",
  "message0": "新增一列  %1  元件區 %2",
  "args0": [
    {
      "type": "input_dummy",
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_slider_grid",
  "message0": "新增一列  %1  滑桿網格區 %2",
  "args0": [
    {
      "type": "input_dummy",
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_button",
  "message0": "新增按鈕 顏色 : %1 名稱 : %2 按下時 : %3 放開時 : %4 || 圓形 : %5",
  "args0": [
     {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
      },
     {
      "type": "field_input",
      "name": "name",
      "text": "前進"
    },
     {
      "type": "field_input",
      "name": "touch_s",
      "text": "f"
    },
    {
      "type": "field_input",
      "name": "touch_e",
      "text": "s"
    },
    {
      "type": "field_checkbox",
      "name": "circle",
      "checked": false
   }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_label",
  "message0": "新增內標題 內容 : %1 字體大小: %2 顏色 : %3",
  "args0": [
     
     {
      "type": "field_input",
      "name": "context",
      "text": "測試一"
    },
     {
      "type": "field_input",
      "name": "fontsize",
      "text": "15"
    },
     {
      "type": "field_colour",
      "name": "color",
      "colour": "#ff0000"
      }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_slider",
  "message0": "新增滑桿 標題 : %1  最小值: %2  最大值: %3 步進值: %4  初始值: %5 發送識別字串: %6",
  "args0": [
     {
      "type": "field_input",
      "name": "name",
      "text": "馬達一"
    },
     {
      "type": "field_input",
      "name": "min",
      "text": "0"
    },
    {
      "type": "field_input",
      "name": "max",
      "text": "180"
    },
    {
      "type": "field_input",
      "name": "step",
      "text": "10"
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "90"
    },
     {
      "type": "field_input",
      "name": "id_char",
      "text": "a"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_togglesw",
  "message0": "新增開關 標題 : %1  [開]時顯示內容: %2  [關]時顯示內容: %3 發送識別字串: %4",
  "args0": [
     {
      "type": "field_input",
      "name": "name",
      "text": "內建 LED 燈"
    },
     {
      "type": "field_input",
      "name": "on",
      "text": "開燈"
    },
    {
      "type": "field_input",
      "name": "off",
      "text": "關燈"
    },
    {
      "type": "field_input",
      "name": "id_char",
      "text": "SW1"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_image",
  "message0": "新增128x128圖片 www.base64-image.de 編碼 : %1 顯示比例-[ 寬度: %2 %% 高度:  %3 %%]",
  "args0": [
    {
      "type": "field_input",
      "name": "code",
      "text": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAABybAAAcmwG6Mw9bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTA0VDAyOjAzOjEwKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0wNFQxODozODo0OSswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOS0wNFQxODozODo0OSswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ODc4MTMyMC00YThhLTJjNDctOWQ4NC0wYzNlNzYyNmY4ZWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNTM0YWY1ZC0yYTg5LWY2NDgtYjYzMC01YWI3ZjVhZWQ1YjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmM5YzMzMC0wZWI3LTVkNGEtYTQ4ZC0xOWFmZTljMWNjNDkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZmYzljMzMwLTBlYjctNWQ0YS1hNDhkLTE5YWZlOWMxY2M0OSIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0wNFQwMjowMzoxMCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ODc4MTMyMC00YThhLTJjNDctOWQ4NC0wYzNlNzYyNmY4ZWIiIHN0RXZ0OndoZW49IjIwMjAtMDktMDRUMTg6Mzg6NDkrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Rx2/lAAAfkElEQVR42u2deZhlVXnuf++396nqkaYZRPGCRGZQRCHXAcUJ8UKIBiOKUa8mJirmMSgqIQ4BjUNiREGjxpgL0atRkQiKwYmI4AgC4UYUHFCIoiIgdEMPVWev9d4/9j6nTs3V1VXVp+mznmc/XdWnzt5rr/Wubx5km8HYcUd579fXNj8KRSLL2AXhjEMoNwAJ9jI6GXMw0AaqOT7DQCbzIArdFq381257PTmgALKxBAZniKJ+nrNAk2+mBrAOodK4Ek5QRIYMdvM9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"
    },
    {
      "type": "field_input",
      "name": "width",
      "text": "100"
    },
    {
      "type": "field_input",
      "name": "height",
      "text": "100"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour":"339999",
  "tooltip": "放上 128x128 10kb 的圖片->show code -> select all -> copy -> 貼上",
  "helpUrl": "http://www.base64-image.de"
},
{
  "type": "html_joystick",
  "message0": "新增虛擬搖桿 顯示比例-[ 寬度: %1 %% 高度:  %2 %%] 發送識別字串: %3 || 自動返回中心點: %4",
  "args0": [
    {
      "type": "field_input",
      "name": "width",
      "text": "100"
    },
    {
      "type": "field_input",
      "name": "height",
      "text": "100"
    },
    {
      "type": "field_input",
      "name": "code",
      "text": "joystick"
    },
    {
      "type": "field_checkbox",
      "name": "center",
      "checked": true
   }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour":"339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_two_joystick",
  "message0": "新增虛擬雙搖桿設定 發送識別字串 %1 %2 左搖桿 : 顯示比例-[ 寬度: %3 %% 高度:  %4 %%] || 自動返回中心點: %5  %6 右搖桿 : 顯示比例-[ 寬度: %7 %% 高度:  %8 %%] || 自動返回中心點: %9 ",
  "args0": [
    {
      "type": "field_input",
      "name": "lr_code",
      "text": "joystick"
    },
     {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "l_width",
      "text": "100"
    },
    {
      "type": "field_input",
      "name": "l_height",
      "text": "100"
    },
    {
      "type": "field_checkbox",
      "name": "l_center",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "r_width",
      "text": "100"
    },
    {
      "type": "field_input",
      "name": "r_height",
      "text": "100"
    },
    {
      "type": "field_checkbox",
      "name": "r_center",
      "checked": true
   }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour":"339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "html_line",
  "message0": "新增空行 次數: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "num",
      "text": "1"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "args_getvalue",
  "message0": "取得識別字串: %1 後的數據值",
  "args0": [
     {
      "type": "field_input",
      "name": "id_char",
      "check": ""
    },
  ],
  "output": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "args_get_s_joystick_value",
  "message0": "取得單搖桿字串的座標 %1 值",
  "args0": [
     {
      "type": "field_dropdown",
      "name": "position",
      "options": [
        [
          "X",
          "1"
        ],
        [
          "Y",
          "2"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "args_getkey",
  "message0": "查詢接收字串的對應值",
  "output": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "args_get_d_joystick_value",
  "message0": "取得雙搖桿的座標 %1 值",
  "args0": [
     {
      "type": "field_dropdown",
      "name": "position",
      "options": [
        [
          "左搖桿-X",
          "1"
        ],
        [
          "左搖桿-Y",
          "2"
        ],
        [
          "右搖桿-X",
          "3"
        ],
        [
          "右搖桿-Y",
          "4"
        ],
      ]
    }
  ],
  "output": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "args_getkey",
  "message0": "查詢接收字串的對應值",
  "output": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "joystick_direction",
  "message0": "將搖桿的座標 X值 %1 及 Y 值 %2 ，轉成四個方向值至 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "text": "0"
    },
    {
      "type": "input_value",
      "name": "y",
      "text": "0"
    },
    {
      "type": "input_value",
      "name": "result",
      "text": "0"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "339999",
  "tooltip": "",
  "helpUrl": "輸出值"
},
{
  "type": "html_progress",
  "message0": "新增連線狀態顯示",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#E74C3C",
  "tooltip": "",
  "helpUrl": ""
},
]);
