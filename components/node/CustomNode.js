import { Handle, Position } from 'reactflow'
import { useDropzone } from 'react-dropzone'
import styles from './CustomNode.module.css'
import { RxDragHandleDots2 } from 'react-icons/rx'
import { toast } from 'sonner'

export default function CustomNode() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: { 'text/csv': ['.csv'] },
    onDrop: (acceptedFile) => {
      console.log('✅ acceptedFile', acceptedFile)
    },
  })

  const filesList = acceptedFiles.map((file) => <li key={file.name}>{file.name}</li>)
  return (
    <>
      <Handle type='target' position={Position.Bottom} />
      <div className={styles.node}>
        <RxDragHandleDots2 />
        {filesList.length === 0 ? (
          <section className={styles.dropArea}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop and click here</p>
            </div>
          </section>
        ) : (
          <div className={styles.node}>
            <div className={styles.dropArea}>
              <ul>{filesList}</ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
