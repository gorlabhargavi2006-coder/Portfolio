
# Kill processes using ports 5000, 5173, and 5174 - THOROUGH version
$ports = 5000, 5173, 5174
foreach ($port in $ports) {
    try {
        Write-Host "Checking port $port..."
        $connections = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
        if ($connections) {
            $procIds = $connections | Select-Object -ExpandProperty OwningProcess -Unique
            foreach ($procId in $procIds) {
                if ($procId -le 0) { continue } # Skip system idle processes
                try {
                    $process = Get-Process -Id $procId -ErrorAction SilentlyContinue
                    if ($process) {
                        Write-Host "Killing process: $($process.ProcessName) (PID: $procId) on port $port"
                        Stop-Process -Id $procId -Force -ErrorAction Stop
                        Start-Sleep -Milliseconds 500
                    }
                }
                catch {
                    Write-Host "Could not kill PID $procId on port $port : $_"
                }
            }
        }
        else {
            Write-Host "No processes on port $port"
        }
    }
    catch {
        Write-Host "Error checking port $port : $_"
    }
}

# Wait a second to ensure processes are gone
Start-Sleep -Seconds 1

Write-Host "✅ Ports cleaned up successfully!"
