export enum ObserveType {
  REMOVE
}

export interface TrackedElement {
  el: HTMLElement | null
  callback: (el?: Node) => void
  type: ObserveType
}

const beTrackedElements = ref<TrackedElement[]>([])

/**
 * 添加被追踪变化的节点，节点的结构需要符合 `TrackedElement` 的结构
 * @param element 被追踪的节点
 */
export function addTrackedElement(element: TrackedElement) {
  beTrackedElements.value.push(element)
}

/**
 * 删除被追踪的节点，节点的结构需要符合 `TrackedElement` 的结构
 * @param element 被追踪的节点
 */
export function removeTrackedElement(element: TrackedElement) {
  beTrackedElements.value = beTrackedElements.value.filter(item => item.el !== element.el)
}

/**
 * 对删除节点的处理
 * @param mutation
 */
function observeRemovedNode(mutation: MutationRecord) {
  // 对删除的节点进行的处理
  mutation.removedNodes.forEach((item) => {
    const trackedElement = beTrackedElements.value.find(element => element.el === item && element.type === ObserveType.REMOVE)
    if (trackedElement) {
      trackedElement.callback(item)
    }
  })
}

/**
 * 启动 MutationObserver
 * @param targetNode 被监听的节点，默认是 document.body
 */
export function setupMutationObserver(targetNode: HTMLElement = document.body) {
  if (!window.MutationObserver) return console.warn('sorry, your browser doesn\'t support MutationObserver')
  const config = { attributes: true, childList: true, subtree: true }
  const callback = function(mutationsList: MutationRecord[]) {
    if (!beTrackedElements.value.length || !window.MutationObserver) return
    for (const mutation of mutationsList) {
      observeRemovedNode(mutation)
    }
  }
  const observer = new MutationObserver(callback)
  observer.observe(targetNode, config)
}
