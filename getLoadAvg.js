
import si from 'systeminformation';

export async function getCPULoadAverage(){
    const {cpus} = await si.currentLoad();
    const coreLoads = cpus.map(core => core.load/100);
    const totalLoad = coreLoads.reduce((sum, load) => sum + load, 0);
    const averageLoadPerCore = totalLoad / coreLoads.length;
    return Math.round( averageLoadPerCore * 100)/100;  
}

