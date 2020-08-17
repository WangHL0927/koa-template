const pg = require('pg');
const uuid = require('uuid')

async function database (url) {
  const pool = new pg.Pool({ connectionString: url });
  await pool.query('select now();');
  return pool;
}

async function addWorkflow (db, id, name, nodeList, remark) {
  console.log('add workflow ... name', name)

  const list = []

  for (const nodeName of nodeList) {
    const node = await db.query(
          `select id, name
           from workflow_node
           where name = $1;`, [nodeName])
                         .then(({ rows }) => rows[0] || {})

    if (node.id) {
      list.push(node.id)
      console.log(node.id)
    } else {
      throw 'not found workflow node name: ' + nodeName
    }
  }
  console.log('final list is ', list)

  await db.query(
        `insert into workflow (id, name, workflow_node_list, remark)
         values ($1, $2, $3, $4)
         on conflict do nothing`,
      [id, name, list, remark])
}

async function addWorkflowNode (db, id, name, remark) {
  console.log('add workflow node... name', name)
  await db.query(
        `insert into workflow_node (id, name, remark)
         values ($1, $2, $3)`,
      [id, name, remark])
}

async function main () {
  console.log('connect db')
  const db = await database(
      'postgresql://pms:DaWLe9aDbZXPi4DpYKjvXJ3Q@ext-server-01.pi2.link:3433/pms')
  console.log('db connected')

  // await addWorkflowNode(db, uuid.v4(), 'pf-01-条码录入', '设备串号贴纸扫码录入')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-外观检查', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-单板测试开始', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-开机测试', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-烧写串号', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-LED检查', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-温度检查', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST自检开始', '隐藏流程，仅作标记。')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST-FLASH', 'POST自检项')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST-EEPROM', 'POST自检项')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST-POWER', 'POST自检项')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST-GSM', 'POST自检项')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST-BLE', 'POST自检项')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-POST自检结束', '隐藏流程，仅作标记。')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-单板测试结束', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-老化测试', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-整机测试', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-性能测试', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-切换模式', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-最终检查', '无')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-单板重测', '独立节点，手动触发。')
  // await addWorkflowNode(db, uuid.v4(), 'pf-01-整机重测', '独立节点，手动触发。')

  // await addWorkflow(db, uuid.v4(), 'pf-双子座-01', [
  //   'pf-01-条码录入',
  //   'pf-01-外观检查',
  //   'pf-01-单板测试开始',
  //   'pf-01-开机测试',
  //   'pf-01-烧写串号',
  //   'pf-01-LED检查',
  //   'pf-01-温度检查',
  //   'pf-01-POST自检开始',
  //   'pf-01-POST-FLASH',
  //   'pf-01-POST-EEPROM',
  //   'pf-01-POST-POWER',
  //   'pf-01-POST-GSM',
  //   'pf-01-POST-BLE',
  //   'pf-01-POST自检结束',
  //   'pf-01-单板测试结束',
  //   'pf-01-老化测试',
  //   'pf-01-整机测试',
  //   'pf-01-性能测试',
  //   'pf-01-切换模式',
  //   'pf-01-最终检查',
  // ], '双子座生产流程')

}

main();
