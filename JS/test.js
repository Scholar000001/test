let hoverTableRow=[
    {text: '培训开始时间', dataIndex: 'a15003'},
    {text: '培训结束时间', dataIndex: 'a15004'},
    {text: '培训班名称', dataIndex: 'a15012'},
    {text: '培训主题', dataIndex: 'a15036'},
    {text: '培训内容', dataIndex: 'a15019'},
    {text: '培训时长', dataIndex: 'a15025'},
    {text: '培训学时', dataIndex: 'a15026'},
    {text: '是否线上培训', dataIndex: 'a15033'},
    {text: '文件名', dataIndex: 'name'},
    {text: '文件密级', dataIndex: 'secretLevelName'},
    {text: '收回票', dataIndex: 'a10102'},
    {text: '有效票', dataIndex: 'a10103'},
    {text: '平均分排名', dataIndex: 'a10118'},
]
let hoverTableData={
    a15019: 'A15019',
    a01001: '杨振兴',
    a01023: '四川省彭州市规划和自然资源局党组副书记、副局长、四级调研员',
    cadreId: '8632a911276a4443af31fbbbeae9e056',
    offlineDataId: '4f5b8102-3345-47b3-8772-ad81d2fca364',
    a15033: 'A15033',
    a15012: 'A15012',
    a15004: 1709308800000,
    a15026: 0,
    a15003: 1709222400000,
    a15036: 'A15036',
    a15025: 0
  }
/**
 * 
 * 
 * 将hoverTableRow和hoverTableData转换成如下格式没有对应的不进行添加显示，并将a15003、a15004转换成时间2023-01-01的格式
 * [
                {
                    title:'培训开始时间',
                    value: '1'
                },
                {
                    title:'培训结束时间',
                    value: '2'
                },
                {
                    title:'培训班名称',
                    value: '3'
                },
                {
                    title:'培训主题',
                    value: '4'
                }
            ]
*/
function transformData(hoverTableRow,hoverTableData){
    let result=[];
    hoverTableRow.forEach(item=>{
        if(hoverTableData[item.dataIndex]||hoverTableData[item.dataIndex]==0){
            if(item.dataIndex==='a15003'||item.dataIndex==='a15004'){
                // 时间格式转换2023-01-01
                let date=new Date(hoverTableData[item.dataIndex]);
                let year=date.getFullYear();
                let month=date.getMonth()+1;
                let day=date.getDate();
                result.push({
                    title:item.text,
                    value:`${year}-${month<10?'0'+month:month}-${day<10?'0'+day:day}`
                })
            }else{
                result.push({
                    title:item.text,
                    value:hoverTableData[item.dataIndex]
                })
            }
        }
    })
    return result;
}
// console.log(transformData(hoverTableRow,hoverTableData));


// 4000 - 1300 = 2700
// 4500 - 3900 = 600