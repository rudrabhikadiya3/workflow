import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'
import { useDropzone } from 'react-dropzone'
import './CustomNode.module.css'
const handleStyle = { left: 10 }

export default function CustomNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, [])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'text/csv',
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
    },
  })

  const filesList = acceptedFiles.map((file) => <li key={file.name}>{file.name}</li>)

  return (
    <>
      <Handle type='target' position={Position.Bottom} />
      <div className='node'>
        {filesList.length === 0 ? (
          <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <div {...getInputProps()} style={{ cursor: 'pointer' }}>
              {filesList.length === 0 && ' Click or drag and drop files here'}
            </div>
            {filesList.length > 0 && <ul>{filesList}</ul>}
          </div>
        ) : (
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <ul>{filesList}</ul>
          </div>
        )}
      </div>
      {/* <Handle type='source' position={Position.Bottom} id='a' /> */}
      {/* <Handle type='source' position={Position.Bottom} id='b' style={handleStyle} /> */}
    </>
  )
}
