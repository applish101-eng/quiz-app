Add-Type -AssemblyName System.Drawing

$sizes = @(192, 512)
$bgColor = [System.Drawing.Color]::FromArgb(134, 59, 255)
$fgColor = [System.Drawing.Color]::White
$publicDir = Join-Path (Join-Path $PSScriptRoot "..") "public"

foreach ($size in $sizes) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

  # Background
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($size, $size)),
    $bgColor,
    [System.Drawing.Color]::FromArgb(126, 20, 255)
  )
  $g.FillRectangle($brush, 0, 0, $size, $size)

  # Draw a lightning bolt path
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $pad = $size * 0.2
  $midX = $size / 2
  $topY = $pad
  $botY = $size - $pad

  # Lightning bolt shape
  $pts = @(
    [System.Drawing.PointF]::new($midX + $size*0.15, $topY),
    [System.Drawing.PointF]::new($midX - $size*0.15, $size*0.55),
    [System.Drawing.PointF]::new($midX + $size*0.05, $size*0.55),
    [System.Drawing.PointF]::new($midX - $size*0.15, $botY),
    [System.Drawing.PointF]::new($midX + $size*0.10, $size*0.58),
    [System.Drawing.PointF]::new($midX - $size*0.05, $size*0.58)
  )
  $path.AddPolygon($pts)

  $g.FillPath([System.Drawing.SolidBrush]::new($fgColor), $path)

  $filePath = Join-Path $publicDir "icon-${size}.png"
  $bmp.Save($filePath, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Host "Generated $filePath"

  $bmp.Dispose()
  $g.Dispose()
}
