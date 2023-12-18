import { useCallback, useMemo } from 'react'
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow'
import 'reactflow/dist/style.css'
import styles from './workflow.module.css'
import CustomNode from './node/CustomNode'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  {
    id: 'node-1',
    type: 'textUpdater',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function WorkFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])
  // custome node
  const nodeTypes = useMemo(() => ({ textUpdater: CustomNode }), [])

  return (
    <div className={styles.workflowContainer}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes}>
        <MiniMap />
        <Controls />
        <Background variant='cross' color='#b6cad7' />
      </ReactFlow>
    </div>
  )
}
